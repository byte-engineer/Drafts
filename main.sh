
#: This will display the system info on Windows. (arch wiki)
#> It has GUI. Really nice. 
#> Really nice it has built-in search mechnesm.
msinfo32

# This equavelant commend on linux. (arch wiki)
cat '/sys/firmware/efi/fw_platform_size'

#: For knowing the main() return of the program. (General)
#> This will work on almost all operating systems.
#> This will return letral `True` or `False`
$?




#: Regular Expression--------------------------------------
#> Regular expreswsion used to define a pattren mostlly to search on it.
#> `regex` for short are now becomes a main concept on the computer science.
#> Regular Expressions are exists on all programming languages and all searching engins.
#> In this example we will use grep matching tool. | usage: grep <pattren> <file>

# Literal matchs
grep "Hello"                           # Will search for 'Hello' literally.

# Dot `.`
grep "h.t"                             # Dot matchs any single character.                          | matches hat, hit, hot, h9t

# Square brakets. 
grep "h[eaiou]t"                       # Just matchs one character from the square brakets.        | matches hat, hit, hot, hut

# caret `^`
grep "[^0-9]"                          # Matches any character except 0 to 9.                      | matches e, f, h, i, 

# Quantifiers (*, +, ?, {n,m})
grep "a*"                              # Zero or more a's                                          | matches  , a, aa, aaa, ...
grep "a+"                              # One or more a's                                           | matches a, aa, aaa, ...

# Anchors (^, $)
grep "^hi"                             # matches 'hi' on a start of a line.
grep "bye$"                            # matches 'bye' at the end of a line.

# Groups 
(cat|dog)                              # matches "cat" or "dog"

# Escape Characters
\.                                     # matches a literal dots.

# Regex in bash.
[[ "$var" =~ "pattern" ]]