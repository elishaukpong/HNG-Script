<?php

$json = $_SERVER["QUERY_STRING"] ?? '';

$passes = 0;
$fails = 0;

$files = scandir("scripts/");

unset($files[0]);
unset($files[1]);
unset($files[2]);
$data = [];

function testFileContent($string)
{
    if (preg_match('/^Hello\sWorld[,|.|!]*\sthis\sis\s([a-zA-Z|-]{2,}\s){1,6}with\sHNGi7\sID\s(HNG-\d{3,})\sand\semail\s{1,3}(([\w+\.\-]+)@([\w+\.\-]+)\.([a-zA-Z]{2,5}))\s{1,3}using\s([a-zA-Z|#]{2,})\sfor\sstage\s2\stask.?$/i', trim($string), $values)) {
        return ['pass',$values[2],$values[7]];
    }

    return ['fail',null,null];
}

function getEmailFromFileContent($string)
{
    preg_match('/\s?(([\w+\.\-]+)@([\w+\.\-]+)\.([a-zA-Z]{2,5}))/i', trim($string) , $matches, PREG_OFFSET_CAPTURE);

    return @$matches[0][0];
}


if (isset($json) && $json == 'json') {
    header('Content-type: application/json');

    foreach ($files as $file) {

        $extension = explode('.', $file);

        switch (@$extension[1]) {
            case 'php':
                $startScript = "php";
                break;
            case 'js':
                $startScript = "node";
                break;
            case 'py':
                $startScript = "python";
                break;
            case 'dart':
                $startScript = "dart";
                break;
            case 'java':
                $startScript = "java";

                exec("javac scripts/" . $file);
                break;

            default:
                $startScript = "php";
                break;
        }

        $f = @exec($startScript . " scripts/" . $file);


        $newString = str_ireplace(getEmailFromFileContent($f),' ', str_ireplace(' and email','', $f));

        $regexReturn  = testFileContent($f);

        $data[] = [
            'file' => $file,
            'output' => htmlspecialchars(trim($newString)),
            'name' => str_replace('-',' ',$extension[0]),
            'id' => $regexReturn[1],
            'email' => trim(getEmailFromFileContent($f)),
            'language' => $regexReturn[2],
            'status' => $regexReturn[0],
        ];

    }

    echo json_encode($data);

}else{
    if (ob_get_level() == 0) ob_start();
    ?>
    <html>

    <head>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    </head>

    <body>
    <div class="container-fluid">
        <nav class="navbar navbar-dark bg-dark fixed-top">
                    <span class="navbar-text">
                        HNGi7 Team Sentry
                    </span>
            <div class="float-right text-white">
                <small>
                    Leader: <span class="btn btn-sm btn btn-outline-primary">@E.U</span>
                </small> &nbsp;
                <small>
                    FrontEnd: <span class="btn btn-sm btn btn-outline-success">@dona</span>
                </small> &nbsp;
                <small>
                    DevOps: <span class="btn btn-sm btn btn-outline-info">@Fidele</span>
                </small> &nbsp;
            </div>
        </nav>
    </div>
    <div class="container">
        <div class="row" style="padding: 2em 0" class="text-center">

        </div>
        <table class="table table-hover center table-striped">
            <thead class="thead-dark">
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Message</th>
                <th scope="col">Email</th>
                <th scope="col">Status</th>
            </tr>
            </thead>
            <tbody>

            <?php
            $row = 1;

            foreach ($files as $file) {

                $extension = explode('.', $file);

                switch (@$extension[1]) {
                    case 'php':
                        $startScript = "php";
                        break;
                    case 'js':
                        $startScript = "node";
                        break;
                    case 'py':
                        $startScript = "python";
                        break;
                    case 'dart':
                        $startScript = "dart";
                        break;
                    case 'java':
                        $startScript = "java";

                        exec("javac scripts/" . $file);
                        break;

                    default:
                        $startScript = "php";
                        break;
                }

                $f = @exec($startScript . " scripts/" . $file);


                $newString = str_ireplace(getEmailFromFileContent($f),' ', str_ireplace('and email',' ', $f));
                $regexReturn  = testFileContent($f);

                $data[] = [
                    'file' => $file,
                    'output' => $newString,
                    'name' => str_replace('-',' ',$extension[0]),
                    'id' => $regexReturn[1],
                    'email' => trim(getEmailFromFileContent($f)),
                    'language' => $regexReturn[2],
                    'status' => $regexReturn[0],
                ];

                $testEmailVariable = trim(getEmailFromFileContent($f));
                $status = testFileContent($f)[0];
                $email = 'No Email';
                $name = str_replace('-',' ',$extension[0]);

                if(isset($testEmailVariable) && !empty($testEmailVariable)){
                    $email = $testEmailVariable;
                }

                if ($status == 'pass') {

                    echo <<<EOL
                                <tr class="table-success">
                                <th scope="row">$row</th>
                                <td><b>$name</b></td>
                                <td>$newString</td>
                                <td>
                                    $email
                                </td>
                                <td>$status ✅</td>
                                </tr>
                             EOL;
                }
                else {
                    echo <<<EOL
                                <tr class="table-danger">
                                <th scope="row">$row</th>
                                 <td><b>$name</b></td>
                                <td>$newString</td>
                                <td>
                                    $email
                                </td>
                                <td>$status ❌</td>
                                </tr>
                            EOL;
                }
                $row++;

                ob_flush();
                flush();
            }
            ?>

            </tbody>
        </table>


    </div>

    </body>

    </html>
    <?php
}
