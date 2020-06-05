# -*- coding: utf-8 -*-
"""
Created on Wed Jun  3 12:40:07 2020

@author: Erastus Amunwe
"""

def build_intro(p):
    '''
    Parameters
    ----------
    p : dict
        a dictionary containing a person's details.
        
    Returns
    -------
    str
        formated introduction string for the person passed as a dict.
    '''
    return 'Hello World, this is {} with HNGi7 ID {} and email {} using {} for stage 2 task'.format(p["name"],p["id"],p["email"],p["lang"])


mine = {'name': 'Erastus Amunwe', 'id':'HNG-00762', 'lang': 'Python', 'email':'eneamunwe@gmail.com'}

#if ran as a script 
if __name__ == '__main__':
    print(build_intro(mine))