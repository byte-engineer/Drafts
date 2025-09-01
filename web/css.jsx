
// Importing external CSS file
// We have 3 types of appling CSS
// - External styles
// - Internal styles
// - inline styles

// Extarnal styles import.
// <link rel="stylesheet" href="style.css" />

// Inline CSS is the most powerful it just applied to the element it (cascades) over others.

// Selectors
// Selectors are used to select some element on the wesite
// .class   => dot to identify a class.
// #someId  => hash to identify an ID.


// Some sizing units --------------------------------------

// %     => this depends in parent container so 50% of parent container.
// px    => pexils one of the most used units for static size.
// cm in => centimeters and inches


// For responsive UIs
// em   => 1 rem represent parent tag font size.
// rem  => 1 root-em represent html tag font size.

// Units bellow depends on the screen not on the elemint size.
// vw   => 1% of view width.
// vh   => 1% of view height.
// vmin => 1% of the smaller of vw or vh
// vmax => 1% of the maximum of vw or vh

// calc(<any numerical exprsion>)                                   // calculate CSS sizes.

// Properties ---------------------------------------------
// background-color: <color>;                                        // sets a color on the background.
// background-image: <url>                                           // sets image on the background.
// background-rebeat: <mode>                                         // background image mode. (rebeat, rebeat-x, rebeat-y, no-rebeat)
// background-attechment: <mode>;                                    // sets behaveor of the background image (scroll, fixed)s
// background-position: <side|size>;                                 // sets background image position (.e.g background-position: left center)
// backgound-size: <mode|size>;                                      // sets the size of background image (auto, cover, contain)

// padding: <sz-top> <sz-right> <sz-bottom> <sz-left>                // sets the element padding.
// margin: <sz-top> <sz-right> <sz-bottom> <sz-left>                 // sets margin. margin accepts negitive values.

// border-style: <type>                                              // border type (solid, dotted, dashed, double, none, ...)
// border-width: <size>;                                             // sets border size.
// border-color: <color>;                                            // sets color.

// outline: <size> <type> <color>;                                   // same as the border but outside the element so it does not take aria from the element.

// display: <mode>                                                   // sets display behavior. (block, inline, inline-block, none)
// visibility: <mode>;                                               // same as display none but it reserves element place. image like making it transparent. (visible, hidden, collapse)
// overflow: <mode>;                                                 // deals with overflowed content. modes (visible, hidden, scroll, auto)

// min-width: <size>;                                                // these has defaute size 'auto' so it depends on the contant.
// max-width: <size>;                                                // we can use fit-content to fit inside content.
// max-height: <size>;
// max-height: <size>;

// text-shadow: <h-offset> <v-offset> <blur> <color>;                // adds shadow to text.
// text-align: <side>;                                               // move whole text to left, right and center.
// direction: <mode>;                                                // sets start and end direction of text. (ltr, rtl)
// text-decoration: <attribute>;                                     // attributes (none, underline, overline, line-through, ...)
// text-transform: <attribute>;                                      // attributes (capitlize, uppercase, lowercase, ...)
// letter-spacing: <size>;                                           // sets spaces between letters.
// word-spacing: <size>;                                             // sets spaces between words.
// text-indent: <size>;                                              // adds indentatoins before text.
// line-height: <size>;                                              // space between lines. | 1.6 => 160% of text height.
// white-space: <mode>;                                              // modes (normal, nowrap)
// text-overflow: <mode>;                                            // to show the user there is hidden text. | ellipsis -> '...' (ellipsis, ...)

// font-family: 'Courier New', Courier, monospace;                   // sets font fammily.
// font-size: <size>;
// font-weight: <bold, normal>;                                      // clear/set bold font.
// font-style: <normal, oblique, italic>;
// font-variant: <normal, small-caps>;

// cursor: <attribute>;                                              // defines mouse curosr form. (pointer, grab, move, ...)

// clear: <side>;                                                    // positions elements left/right and allows text to wrap around them.
// flaot: <side>;                                                    // stops wrapping, forces the next element to appear below floated ones.

// opacity: <0-1>;                                                   // controles the opacity of the elements.
// position: <mode>;                                                 // positioning. Modes (relative, absolute, fixed, sticky) recommanded to be used with (left, right, top, bottom)

// z-index: <integre>;                                               // detemaines the layers rank. It does not work without position property.

// list-style-type: <mode>;                                          // this property detirmaines the type of <ul> or <ol> tags bullets. Modes (disc, none, ...)
// list-style-position: <outside, inside>;                           // detemaines if the bullets included on <ul> or <ol> tags or not.