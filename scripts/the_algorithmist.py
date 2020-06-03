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
        a dictionary containing a person detail.
        
    Returns
    -------
    str
        formated introduction string for the person passed as a dict.
    '''
    return f'Hello World, this is {p["name"]} with  HNGi7 ID {p["id"]} using {p["lang"]} for stage 2 task'


mine = {'name': 'the_algorithmist', 'id':'HNG-00762', 'lang': 'Python'}

#if ran as a script 
if __name__ == '__main__':
    print(build_intro(mine))