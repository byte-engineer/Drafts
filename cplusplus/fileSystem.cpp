
// fileSystem.cpp

#include <filesystem>
#include <iostream>

namespace fs = std::filesystem;

int main() {
    
    fs::path file("example.txt");        // storing path in path object.
    fs::exists(file);                    // checks if the path exists.
    fs::rename(file, fs::path("example.wow"));
}