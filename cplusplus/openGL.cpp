// openGL.cpp
// Draft


// I use openGL with:
// - GLWF                     // For window creation and polling events.
// - GLAD                     // OpenGL loader library. 

// standard library of course.
#include <iostream>

// Include the header files.
#include "glad/glad.h"             // Link glad.c with it.
#include "GLFW/glfw3.h"            // Compile GLFW library and link with it.

int main() {

    // First: Creating a window.

    // Initlize glfw.
    glfwInit();                    // importent in the begening.


    // Window hints.
    glfwWindowHint(GLFW_CONTEXT_VERSION_MAJOR, 3);   // for openGL 3.3 
    glfwWindowHint(GLFW_CONTEXT_VERSION_MINOR, 3);
    glfwWindowHint(GLFW_OPENGL_PROFILE, GLFW_OPENGL_CORE_PROFILE);  // to use core profile of openGL.
    
    // resets all window hints to thier default values.
    // glfwDefaultWindowHints();

    // this just required for apple targets. 
#ifdef __APPLE__
    glfwWindowHint(GLFW_OPENGL_FORWARD_COMPAT, true);
#endif


    // Calling this function return a window pointer.
    // If window creation fails, NULL will be returned. so we need to check the pointer. and call glfwTerminate();
    GLFWwindow* window =glfwCreateWindow(800, 600, "Window Title", nullptr, nullptr);
    
    // We can create a full-screen window in the primary monitor.
    // `glfwGetPrimaryMonitor()` returns `GLFWmonitor* `. 
    GLFWwindow* windowFullScreen =glfwCreateWindow(800, 600, "Window Title", glfwGetPrimaryMonitor(), nullptr);

    // This dedicates the current OpenGL context to this window.
    // Or in another words "all OpenGL commands will affect the context tied to this window."
    // From this point we can call any openGL function.
    glfwMakeContextCurrent(window);

    // Load OpenGL function.
    // - glfwGetProcAddress                    // Get the OpenGL functions address at run time.
    // - (GLADloadproc)                        // Cast `GLFWglproc` to `GLADloadproc`
    // - gladLoadGLLoader();                   // Call glad to load the already found address and plog them to thier functions.
    if (!gladLoadGLLoader((GLADloadproc)glfwGetProcAddress)) return -1;

    // openGL function.
    // Specify the lower left corner of the viewport rectangle, in pixels. normally zeros.
    // Specify the width and height of the viewport.
    glViewport(0, 0, 800, 600);

    // This callback called when OpenGL viewport resized.
    glfwSetFramebufferSizeCallback(window, frameBufferSizeCallback);


    // RENDER LOOP ---
    while (!glfwWindowShouldClose(window)) {


        // DRAWING ---
        // OpenGL pipeline contains this main shaders:
        // - Vertex shader.
        // - Geometry shader.
        // - Fragment shader.

        // Change background color.
        // This takes floats from [0, 1] range.
        // Red, Green, Blue, Alpha
        glClearColor(0.2f, 0.3f, 0.2f, 1.f);

        // The glClear function sets the bitplane area of the window to values previously selected by 
        // glClearColor, glClearIndex, glClearDepth, glClearStencil, and glClearAccum. 
        GL_DEPTH_BUFFER_BIT;
        GL_ACCUM_BUFFER_BIT;
        GL_STENCIL_BUFFER_BIT;
        GL_COLOR_BUFFER_BIT;
        glClear(GL_COLOR_BUFFER_BIT);
        

        // POST DRAWING ---
        // This takes OpenGL back-buffer and display it on the window.
        glfwSwapBuffers(window);

        // Polls all events (updates them).
        // Events are like -> window resized, key press, ... 
        glfwPollEvents();
    }

    // This Treminats all windows and whole GLFW library.
    glfwTerminate();
}



// This callback called when OpenGL viewport resized. 
void frameBufferSizeCallback(GLFWwindow* window,int width, int height) {
    glViewport(0, 0, width, height);             // openGL viewport correction.
}