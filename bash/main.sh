#!/bin/bash

# Bash is a programming language espcially on Linux 
# Bash is a command interpreter or (shell)
# Bash waidlly used on automation on unix-like systems.
# Bash is really powerfull on linux and macOS.
# Any command that runs on the bash termenal can be written as a script on bash script.


# If we want to find the location of bash interpreter --> which bash
# It should be on /usr/bin.bash
# If we want to run the script on linux we have two ways: 
# *> bash file.sh                    # this way is by using the bash interpreter directly
# *> chmod +x file.sh                # turn the file to excutable (should be marked green when `ls`).
#     ./file.sh                      # run the file.

# Shpang (as you can see on the frist line) is used to locate the interpreter.
# Some bash files does not contain an .sh file extension.
# But the Shpang identefy the type of the script.


#:Printing---------------------------------------
#> we use echo commend to print some thing to the bash termenal.
# Double qouts are not required but you should but them there if you used space or spacial characters.
# We can use single qouts or double qouts.
echo "Hello, World!"                             # It is this easy :)



#:Variables--------------------------------------
#> As other programming languages Bash has variables to store some data.
#> To initlize variables we write name of the variable then equal sign and then the data on the right hand side.
#> Whene ever we refrence a variable in bash we have to add a doller sign in front of it. like so $var 
#> If we tryed to access not declared variable bash just will assume it as an empty variable.
var="this is a variable"                         # Do not add a space after the equal sign.

# refrencing a bash variable
echo $var                                        # We now refrence var and plug it on `echo` command.
echo var                                         # This will print the 'var' litrally not the contant of the variable.
echo $not_dclared_var                            # Not error just assumed as empty variable.

# Embed variable on string                       # For this situation we need to use double qouts other wise it going to substitutez the litral name of the variable.
echo "variable contant: $var"                    # Embedding variable on a string.


