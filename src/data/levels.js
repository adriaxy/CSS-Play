const levels = [
  {
    level: 1,
    name: "Styling Essentials",
    successMessage:  `You’ve successfully completed the Styling Essentials level! You mastered essential CSS properties like color, font-family and text-align. Keep experimenting and applying what you’ve learned`,
    defaultShowGrid: false,
    sublevels: [
      {
        id: 1,
        name: "color",
        
        evaluatedBlocks: ["block1", "block2"],
        totalBlocks: ["block1", "block2"],
        challenge: "Apply the color property to both blocks so that each text matches the required color shown in the target layout.",
        theory: {
          description: [
            "The color property defines the color of text inside an element.",
            "It affects only the text content and does not change the background of the element.",
            "Colors can be defined using keywords, hexadecimal values, RGB, or HSL formats.",
            "Changing the text color helps improve readability and visual hierarchy in a design.",
            "Using the color property effectively is essential for styling typography."
          ],
          syntax: [
            "/* Named color */\ncolor: red;",
            "/* Hexadecimal value */\ncolor: #ff0000;",
            "/* RGB value */\ncolor: rgb(255, 0, 0);",
            "/* HSL value */\ncolor: hsl(0, 100%, 50%);"
          ]
        },
        blocks: [
          {
            id: "initialStylePlayground",
            initialStyleBlock1: { width: "50px" },
            initialStyleBlock2: { width: "50px" },
            defaultCode: "/* Block 1 */\n.block1 {\n\n}\n\n/* Block 2 */\n.block2 {\n\n}",
            blockChildrenInside: false,
            blockChildrenOutside: false
          },
          {
            id: "block1",
            group: "group1",
            initialStyle: { borderRadius: "var(--border-txt-xl)", padding: "5px 15px", fontSize: "30px", fontWeight: "bold", outline: "1px solid red", filter: "drop-shadow(0 0 8px rgba(255, 0, 0, 0.5))", background: "var(--gradient-darkest)"},
            defaultCode: "",
            text: 'Roses are red 🌹',
            solution: [{ color: "red" }],
            viewSolution: 'color: red;'
          },
          {
            id: "block2",
            group: "group2",
            initialStyle: { borderRadius: "var(--border-txt-xl)", padding: "5px 12px", fontSize: "30px", fontWeight: "bold", outline: "1px solid green", filter: "drop-shadow(0 0 5px green)", background: "var(--gradient-darkest)"},
            defaultCode: "",
            text: 'Green like a frog 🐸',
            solution: [{ color: "green" }],
            viewSolution: 'color: green;'
          },
          {
            id: "blockParent",
            style: {
              padding: "20px",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: 'center',
              justifyContent: 'center',
              gap: '50px'
            }
          }
        ],
        successMessage: "Great! You've learned how color works."
      },
      {
        id: 2,
        name: "background-color",
        evaluatedBlocks: ["block1", "block2"],
        totalBlocks: ["block1", "block2"],
        challenge: "Apply the background-color property to both blocks so that each one matches the required background color shown in the target layout.",
        theory: {
          description: [
            "The background-color property defines the background color of an element.",
            "It fills the entire content and padding area behind the element's content.",
            "Background colors help separate elements visually and create contrast in layouts.",
            "You can define colors using keywords, hexadecimal, RGB, or HSL values.",
            "Using background-color effectively helps structure and highlight parts of a UI."
          ],
          syntax: [
            "/* Named color */\nbackground-color: blue;",
            "/* Hexadecimal value */\nbackground-color: #0000ff;",
            "/* RGB value */\nbackground-color: rgb(0, 0, 255);",
            "/* Transparent background */\nbackground-color: transparent;"
          ]
        },
        blocks: [
          {
            id: "initialStylePlayground",
            initialStyleBlock1: { width: "50px" },
            initialStyleBlock2: { width: "50px" },
            defaultCode: "/* Block 1 */\n.block1 {\n\n}\n\n/* Block 2 */\n.block2 {\n\n}",
            blockChildrenInside: false,
            blockChildrenOutside: false
          },
          {
            id: "block1",
            group: "group1",
            initialStyle: {position: "absolute", top:"25%", left: "20%", width: "100px", height: "100px", backgroundColor: 'white', borderRadius: "var(--border-txt-md)", boxShadow: '-20px 25px 50px -10px blue', outline: "2px solid blue", display: "grid", placeItems: "center", color: "#0000CC"},
            defaultCode: "",
            solution: [{ backgroundColor: 'blue' }],
            viewSolution: 'background-color: blue;'
          },
          {
            id: "block2",
            group: "group2",
            initialStyle: { position: "absolute", bottom:"30%", right: "20%", width: "100px", height: "100px", backgroundColor: 'white', borderRadius: "var(--border-txt-md)", boxShadow: "20px 25px 50px -15px red", outline: "2px solid red", display: "grid", placeItems: "center", color: "#CC0000"},
            defaultCode: "",
            solution: [{ backgroundColor: 'red' }],
            viewSolution: 'background-color: red;'
          },
          {
            id: "blockParent",
            style: {
              position: "relative"
            }
          }
        ],
        successMessage: "Great! You've learned how background-color works."
      },
      {
        id: 3,
        name: "font-family",
        evaluatedBlocks: ["block1", "block2"],
        totalBlocks: ["block1", "block2"],
        challenge: "Apply the font-family property to both blocks so that each text uses the required font shown in the target layout.",
        theory: {
          description: [
            "The font-family property defines which typeface is used to display text.",
            "You can specify multiple fonts as a fallback list in case the first one is not available.",
            "Fonts strongly influence the tone and readability of a design.",
            "Common generic families include serif, sans-serif, monospace, cursive, and fantasy.",
            "Choosing the right font-family is essential for consistent typography."
          ],
          syntax: [
            "/* Single font */\nfont-family: monospace;",
            "/* Font with fallback */\nfont-family: 'Times New Roman', serif;",
            "/* Multiple fallbacks */\nfont-family: Arial, Helvetica, sans-serif;",
            "/* Generic family */\nfont-family: serif;"
          ]
          },
        blocks: [
          {
            id: "initialStylePlayground",
            initialStyleBlock1: { width: "50px" },
            initialStyleBlock2: { width: "50px" },
            defaultCode: "/* Block 1 */\n.block1 {\n\n}\n\n/* Block 2 */\n.block2 {\n\n}",
            blockChildrenInside: false,
            blockChildrenOutside: false
          },
          {
            id: "block1",
            group: "group1",
            initialStyle: { borderRadius: "var(--border-txt-md)", padding: "5px 15px", fontSize: "20px", fontWeight: "bold", outline: "1px solid #00bcd461", filter: "drop-shadow(0 0 15px #00bcd461)", background: "var(--gradient-darkest)", fontFamily: "sans-serif"},
            defaultCode: "",
            text: 'I am rigid in Monospace.',
            solution: [
              { fontFamily: "monospace" },
              { fontFamily: "Monospace" }
            ],
            viewSolution: 'font-family: Monospace;'
          },
          {
            id: "block2",
            group: "group2",
            initialStyle: { borderRadius: "var(--border-txt-md)", padding: "5px 12px", fontSize: "20px", fontWeight: "bold", outline: "1px solid #e91e8c61", filter: "drop-shadow(0 0 15px #e91e8c61)", background: "var(--gradient-darkest)", fontFamily: "sans-serif"},
            defaultCode: "",
            text: 'I am fancy in Times New Roman',
            solution: [
              { fontFamily: "Times New Roman" },
              { fontFamily: "times new roman" }
            ],
            viewSolution: 'font-family: Times New Roman;'
          },
          {
            id: "blockParent",
            style: {
              padding: "20px",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: 'center',
              justifyContent: 'center',
              gap: '50px'
            }
          }
        ],
        successMessage: "Great! You've learned how font-family works."
      },
      {
        id: 4,
        name: "font-size",
        evaluatedBlocks: ["block1", "block2"],
        totalBlocks: ["block1", "block2"],
        challenge: "Apply the font-size property to both blocks so that each text matches the required size shown in the target layout.",
        theory: {
          description: [
            "The font-size property defines the size of text inside an element.",
            "It determines how large or small the characters appear on the screen.",
            "Font sizes can be defined using pixels, relative units, or percentages.",
            "Using appropriate font sizes improves readability and visual hierarchy.",
            "Font-size is a fundamental property for controlling typography."
          ],
          syntax: [
            "/* Fixed size */\nfont-size: 20px;",
            "/* Relative to parent */\nfont-size: 120%;",
            "/* Relative unit */\nfont-size: 1.5rem;",
            "/* Small predefined value */\nfont-size: small;"
          ]
        },
        blocks: [
          {
            id: "initialStylePlayground",
            initialStyleBlock1: { width: "50px" },
            initialStyleBlock2: { width: "50px" },
            defaultCode: "/* Block 1 */\n.block1 {\nfont-family: lexend;\n\n}\n\n/* Block 2 */\n.block2 {\nfont-family: lexend;\n\n}",
            blockChildrenInside: false,
            blockChildrenOutside: false
          },
          {
            id: "block1",
            group: "group1",
            initialStyle: { borderRadius: "var(--border-txt-md)", padding: "5px 15px", fontSize: "20px", fontWeight: "bold", outline: "1px solid #ff704361", filter: "drop-shadow(0 0 15px #ff704361)", background: "var(--gradient-darkest)"},
            defaultCode: "",
            text: '50px HUGE!',
            solution: [{ fontSize: "50px" }],
            viewSolution: 'font-size: 50px;'
          },
          {
            id: "block2",
            group: "group2",
            initialStyle: { borderRadius: "var(--border-txt-md)", padding: "5px 12px", fontSize: "20px", fontWeight: "bold", outline: "1px solid #7c4dff61", filter: "drop-shadow(0 0 15px #7c4dff61)", background: "var(--gradient-darkest)"},
            defaultCode: "",
            text: 'minuscule 6px',
            solution: [{ fontSize: "6px" }],
            viewSolution: 'font-size: 6px;'
          },
          {
            id: "blockParent",
            style: {
              padding: "20px",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: 'center',
              justifyContent: 'center',
              gap: '50px'
            }
          }
        ],
        successMessage: "Great! You've learned how font-size works."
      },
      {
        id: 5,
        name: "font-weight",
        evaluatedBlocks: ["block1", "block2"],
        totalBlocks: ["block1", "block2"],
        challenge: "Apply the font-weight property to both blocks so that each text matches the required thickness shown in the target layout.",
       theory: {
          description: [
            "The font-weight property controls how thick or bold text appears.",
            "It can be defined using keywords like normal or bold, or numeric values.",
            "Numeric weights usually range from 100 (thin) to 900 (extra bold).",
            "Heavier weights help emphasize text and create visual hierarchy.",
            "Using font-weight effectively improves clarity and emphasis in typography."
          ],
          syntax: [
            "/* Keyword value */\nfont-weight: bold;",
            "/* Normal text */\nfont-weight: normal;",
            "/* Numeric weight */\nfont-weight: 700;",
            "/* Very thin text */\nfont-weight: 100;"
          ]
        },
        blocks: [
          {
            id: "initialStylePlayground",
            initialStyleBlock1: { width: "50px" },
            initialStyleBlock2: { width: "50px" },
            defaultCode: "/* Block 1 */\n.block1 {\nfont-family: lexend;\nfont-size: 45px;\n\n}\n\n/* Block 2 */\n.block2 {\nfont-family: lexend;\nfont-size: 45px;\n\n}",
            blockChildrenInside: false,
            blockChildrenOutside: false
          },
          {
            id: "block1",
            group: "group1",
            initialStyle: { borderRadius: "var(--border-txt-xl)", padding: "5px 15px", fontSize: "45px", fontWeight: "300", outline: "1px solid #f4433661", filter: "drop-shadow(0 0 15px #f4433661)", background: "var(--gradient-darkest)"},
            defaultCode: "",
            text: 'I am 900!',
            solution: [{ fontWeight: "900" }],
            viewSolution: 'font-weight: 900;'
          },
          {
            id: "block2",
            group: "group2",
            initialStyle: { borderRadius: "var(--border-txt-xl)", padding: "5px 12px", fontSize: "45px", fontWeight: "300", outline: "1px solid #546e7a61", filter: "drop-shadow(0 0 15px #546e7a61)", background: "var(--gradient-darkest)"},
            defaultCode: "",
            text: 'Ultra thin 100',
            solution: [{ fontWeight: "100" }],
            viewSolution: 'font-weight: 100;'
          },
          {
            id: "blockParent",
            style: {
              padding: "20px",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: 'center',
              justifyContent: 'center',
              gap: '50px'
            }
          }
        ],
        successMessage: "Great! You've learned how font-weight works."
      },
      {
        id: 6,
        name: "line-height",
        evaluatedBlocks: ["block1"],
        totalBlocks: ["block1", "block2"],
        challenge: "Apply the line-height property to the block so that the spacing between lines of text matches the required layout.",
        theory: {
          description: [
            "The line-height property defines the vertical spacing between lines of text.",
            "It helps control readability by adjusting how tightly or loosely text lines are stacked.",
            "Line height can be defined using unitless values, pixels, or percentages.",
            "A larger line-height creates more breathing space between lines.",
            "Using line-height properly greatly improves text readability in paragraphs."
          ],
          syntax: [
            "/* Unitless value (recommended) */\nline-height: 1.5;",
            "/* Fixed value */\nline-height: 24px;",
            "/* Percentage */\nline-height: 150%;",
            "/* Default */\nline-height: normal;"
          ]
        },
        blocks: [
          {
            id: "initialStylePlayground",
            initialStyleBlock1: { width: "50px" },
            initialStyleBlock2: { width: "50px" },
            defaultCode: "/* Block 1 */\n.block1 {\nfont-family: lexend;\nfont-size: 13px;\nfont-weight: 300;\n\n}",
            blockChildrenInside: false,
            blockChildrenOutside: false
          },
          {
            id: "block1",
            group: "group1",
            initialStyle: { borderRadius: "var(--border-txt-md)", padding: "10px 10px", textAlign: "center", fontSize: "13px", fontWeight: "300", outline: "1px solid #66bb6a61", filter: "drop-shadow(0 0 15px #66bb6a61)", background: "var(--gradient-darkest)", width: "220px"},
            defaultCode: "",
            text: '"We are what we repeatedly do. Excellence, then, is not an act, but a habit. The habits we form shape our character, and our character shapes our destiny."',
            solution: [{ lineHeight: "2" }],
            viewSolution: 'line-height: 2;'
          },
          {
            id: "blockParent",
            style: {
              padding: "20px",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: 'center',
              justifyContent: 'center',
              gap: '50px'
            }
          }
        ],
        successMessage: "Great! You've learned how line-height works."
      },
      {
        id: 7,
        name: "text-align",
        evaluatedBlocks: ["block1"],
        totalBlocks: ["block1", "block2"],
        challenge: "Apply the text-align property to the block so that the text alignment matches the required layout.",
        theory: {
          description: [
            "The text-align property controls the horizontal alignment of text inside an element.",
            "It determines how inline content is positioned within its container.",
            "Common alignment values include left, right, center, and justify.",
            "Text alignment is often used to improve readability and layout structure.",
            "Using text-align properly helps create balanced and organized text layouts."
          ],
          syntax: [
            "/* Center alignment */\ntext-align: center;",
            "/* Align text to the left */\ntext-align: left;",
            "/* Align text to the right */\ntext-align: right;",
            "/* Justified text */\ntext-align: justify;"
          ]
        },
        blocks: [
          {
            id: "initialStylePlayground",
            initialStyleBlock1: { width: "50px" },
            initialStyleBlock2: { width: "50px" },
            defaultCode: "/* Block 1 */\n.block1 {\nfont-family: lexend;\nfont-size: 13px;\nfont-weight: 300;\nline-height: 2;\n\n}",
            blockChildrenInside: false,
            blockChildrenOutside: false
          },
          {
            id: "block1",
            group: "group1",
            initialStyle: { borderRadius: "var(--border-txt-md)", padding: "10px 20px", textAlign: "right", fontSize: "13px", fontWeight: "300", outline: "1px solid #ba68c861", filter: "drop-shadow(0 0 15px #ba68c861)", background: "var(--gradient-darkest)", lineHeight: "2", width: "220px"},
            defaultCode: "",
            text: '"We are what we repeatedly do. Excellence, then, is not an act, but a habit. The habits we form shape our character, and our character shapes our destiny."',
            solution: [{ textAlign: "center" }],
            viewSolution: 'text-align: center;'
          },
          {
            id: "blockParent",
            style: {
              padding: "20px",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: 'center',
              justifyContent: 'center',
              gap: '50px'
            }
          }
        ],
        successMessage: "Great! You've learned how text-align works."
      }
    ]
  },
  {
    // NIVEL 2 COMPLETO ==>
    level: 2,
    name: "Dimensions and Spacing",
    successMessage: "You’ve successfully completed the Dimensions & Spacing level! You mastered essential CSS properties like padding, margin, width, height, and box-sizing. Keep experimenting and applying what you’ve learned",
    defaultShowGrid: true,
    sublevels: [
      // Sublevel 1: WIDTH
      {
        id: 1,
        name: "width",
        evaluatedBlocks: ["block1", "block2"],
        totalBlocks: ["block1", "block2"],
        challenge: "Apply the width property to both blocks so that each one matches the required width shown in the target layout, using pixel values (px).",
        theory: {
        description: [
          "The width property defines the horizontal size of an element’s content area.",
          "By default, it only affects the content box and does not include padding, border, or margin.",
          "Setting a width allows you to control how elements occupy space within a layout.",
          "The final visible size of an element can change depending on other properties such as `padding`, `border`, and `box-sizing`.",
          "Using `width` effectively is essential for building consistent and predictable layouts."
        ],
        syntax: [
          "/* Fixed width */\nwidth: 200px;",
          "/* Relative to parent */\nwidth: 50%;",
          "/* Responsive units */\nwidth: 10rem;",
          "/* Automatic width (default) */\nwidth: auto;"
        ]
      },
        blocks: [
          {
            id: "initialStylePlayground",
            initialStyleBlock1: { width: "50px" },
            initialStyleBlock2: { width: "50px" },
            defaultCode: "/* Block 1 */\n.block1 {\nbackground-color: #4f9de8;\n\n}\n\n/* Block 2 */\n.block2 {\nbackground-color: #e8734f;\n\n}",
            blockChildrenInside: false,
            blockChildrenOutside: false
          },
          {
            id: "block1",
            group: "group1",
            initialStyle: { width: "50px", height: "50px", background: '#4f9de8', borderRadius: '20px'},
            defaultCode: "",
            solution: [{ width: "150px" }],
            viewSolution: 'width: 150px;'
          },
          {
            id: "block2",
            group: "group2",
            initialStyle: { width: "50px", height: "50px", background: '#e8734f', borderRadius: '20px'},
            defaultCode: "",
            solution:[{ width: "300px" }],
            viewSolution: 'width: 300px;'
          },
          {
            id: "blockParent",
            style: {
              padding: "20px",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: 'center',
              justifyContent: 'center',
              gap: '50px'
            }
          }
        ],
        successMessage: "Great! You've learned how width works."
      },

      // Sublevel 2: HEIGHT
      {
        id: 2,
        name: "height",
        evaluatedBlocks: ["block1", "block2"],
        totalBlocks: ["block1", "block2"],
        challenge: "Apply the height property to both blocks so that each one matches the required height shown in the target layout, using pixel values (px).",
        theory: {
        description: [
          "The height property defines the vertical size of an element’s content area.",
          "By default, it only affects the content box and does not include padding, border, or margin.",
          "Setting a height allows you to control how tall elements appear on the page.",
          "The final visible height can change depending on other properties such as `padding`, `border`, and `box-sizing`.",
          "Using height effectively helps maintain layout consistency and alignment."
        ],
        syntax: [
          "/* Fixed height */\nheight: 100px;",
          "/* Relative to parent */\nheight: 50%;",
          "/* Responsive units */\nheight: 10rem;",
          "/* Automatic height (default) */\nheight: auto;"
        ]
      },
        blocks: [
          {
            id: "initialStylePlayground",
            defaultCode: '/* Block 1 */\n.block1 {\nwidth: 100px;\nbackground-color: #8b5cf6;\n\n}\n\n/* Block 2 */\n.block2 {\nwidth: 100px;\nbackground-color: #10b981;\n\n}',
            blockChildrenInside: false,
            blockChildrenOutside: false
          },
          {
            id: "block1",
            group: "group1",
            initialStyle: { height: "50px", width: "100px", background: '#8b5cf6', borderRadius: '20px'},
            defaultCode: "width: 100px;",
            solution: [{ width: "100px", height: "120px" }],
            viewSolution: 'height: 120px;'
          },
          {
            id: "block2",
            group: "group2",
            initialStyle: { height: "50px", width: "100px", background: '#10b981', borderRadius: '20px'},
            defaultCode: "width: 100px;",
            solution: [{ width: "100px", height: "200px" }],
            viewSolution: 'height: 200px;'
          },
          {
            id: "blockParent",
            style: {
              paddingBottom: "50px",
              height: "100%",
              display: "flex",
              flexDirection: "row",
              alignItems: 'flex-end',
              justifyContent: 'center',
              gap: '50px'
            }
          }
        ],
        successMessage: "Awesome! Now you know how to control height."
      },
      // Sublevel 3: PADDING
      {
        id: 3,
        name: "padding",
        evaluatedBlocks: ["block1", "block2"],
        totalBlocks: ["block1", "block2"],
        challenge: "Apply the padding property to both blocks so that each one matches the required spacing shown in the target layout, using pixel values (px).",
        theory: {
        description: [
          "The padding property adds space inside an element, between its content and its border.",
          "It helps create breathing room for content and improves readability.",
          "You can set padding individually for top, right, bottom, and left, or all sides at once.",
          "Proper use of padding improves the visual structure and spacing within an element.",
          "Padding affects the element’s total size unless `box-sizing` is adjusted."
        ],
        syntax: [
          "/* Same padding on all sides */\npadding: 20px;",
          "/* Vertical | Horizontal */\npadding: 10px 20px;",
          "/* Top | Right | Bottom | Left */\npadding: 5px 10px 15px 20px;",
          "/* Individual sides */\npadding-top: 10px;\npadding-right: 15px;\npadding-bottom: 10px;\npadding-left: 15px;"
        ]
      },
        blocks: [
          {
            id: "initialStylePlayground",
            defaultCode: "/* Block 1 */\n.block1 {\nwidth: 200px;\nheight: 50px;\n\n}\n\n/* Block 2 */\n.block2 {\nwidth: 200px;\nheight: 50px;\n\n}",
            blockChildrenInside: true,
            blockChildrenOutside: false
          },
          {
            id: "block1",
            group: "group1",
            initialStyle: { width: "200px", height: "50px", background: 'var(--b-light)', outline: "1px solid red", filter: "drop-shadow(0 0 20px rgba(255, 0, 0, 0.7))"},
            defaultCode: "width: 200px;\nheight: 50px;",
            solution: [
              { width: "200px", height: "50px", padding: "10px" },                                     
              { width: "200px", height: "50px", paddingTop: "10px", paddingRight: "10px", paddingBottom: "10px", paddingLeft: "10px" } 
            ],
            viewSolution: 'padding: 10px;',
          },
          {
            id: "block2",
            group: "group2",
            initialStyle: { width: "200px", height: "50px", background: 'var(--b-light)', outline: "1px solid green", filter: "drop-shadow(0 0 20px rgba(0, 128, 0, 0.7))"},
            defaultCode: "width: 200px;\nheight: 50px;",
            solution: [
              { width: "200px", height: "50px", padding: "25px 50px 0px 50px"},
              { width: "200px", height: "50px", padding: "25px 50px 0px"},
              { width: "200px", height: "50px", paddingTop: "25px", paddingRight: "50px", paddingLeft: "50px"},
              { width: "200px", height: "50px", paddingTop: "25px", paddingRight: "50px", paddingLeft: "50px", paddingBottom: "0px"}
            ],
            viewSolution: 'padding: 25px 50px 0px 50px;',
          },
          {
            id: "blockParent",
            style: {
              padding: "20px",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: 'center',
              justifyContent: 'center',
              gap: '100px'
            }
          },
          {
            id: "blockChildrenInside",
            style: {width: '100%', height: '100%', background: 'var(--highlight-yellow)',padding: '1px 5px', color: 'black', textAlign: 'center'},
            text: "content"
          }
        ],
        successMessage: "Well done! You now understand padding."
      },

      // Sublevel 4: MARGIN
      {
        id: 4,
        name: "margin",
        evaluatedBlocks: ["block1"],
        totalBlocks: ["block1", "block2"],
        challenge: "Apply the margin property to Block 1 to replicate the spacing shown in the target layout. Use the shorthand syntax to set the right margin so that Block 1 is positioned correctly. Use pixel values.",
        theory: {
        description: [
          "The margin property adds space outside an element, separating it from surrounding elements.",
          "It is essential for controlling spacing between elements and maintaining visual balance.",
          "Margins can collapse under certain conditions, so understanding margin behavior is important.",
          "You can set margins individually for top, right, bottom, and left, or all sides at once.",
          "Proper use of margin helps align elements and prevent overlapping or overcrowding."
        ],
        syntax: [
          "/* Same margin on all sides */\nmargin: 20px;",
          "/* Vertical | Horizontal */\nmargin: 10px 20px;",
          "/* Top | Right | Bottom | Left */\nmargin: 5px 10px 15px 20px;",
          "/* Individual sides */\nmargin-top: 10px;\nmargin-right: 15px;\nmargin-bottom: 10px;\nmargin-left: 15px;"
        ]
      },
        blocks: [
          {
            id: "initialStylePlayground",
            defaultCode: "/* Block 1 */\n.block1 {\nwidth: 150px;\nheight: 100px;\nbackground-color: #ab47bc;\n\n}",
            blockChildrenInside: false,
            blockChildrenOutside: false
          },
          {
            id: "block1",
            group: "group1",
            initialStyle: { width: "150px", height: "100px", background: '#ab47bc', borderRadius: '20px' },
            defaultCode: "width: 150px;\nheight: 100px;\n",
            solution: [
              { width: "150px", height: "100px", marginRight: "100px" },
              { width: "150px", height: "100px", margin: "0px 100px 0px 0px" },
              { width: "150px", height: "100px", marginTop: "0px", marginRight: "100px", marginBottom: "0px", marginLeft: "0px" }
            ],
            viewSolution: 'margin-right: 100px;'
          },
          {
            id: "block2",
            group: "group2",
            initialStyle: { width: "50px", height: "50px", background: 'var(--bg-secondary)', borderRadius: '20px' },
            defaultCode: "width: 150px;\nheight: 100px;\n",
            solution: [{ width: "50px", height: "50px", background: 'var(--bg-secondary)'}],
            viewSolution: 'margin: 0px 0px 0px 250px;'
          },
          {
            id: "blockParent",
            style: {
              paddingBottom: "100px",
              height: "100%",
              display: "flex",
              flexDirection: "row",
              alignItems: 'flex-end',
              justifyContent: 'center'
            }
          }
        ],
        successMessage: "Excellent! You've mastered margins."
      },
      
      // Sublevel 5: BOX-SIZING
      {
        id: 5,
        name: "box-sizing",
        evaluatedBlocks: ["block1"],
        totalBlocks: ["block1", "block2"],
        challenge: "Apply the box-sizing property to Block 1 so that the element’s total width and height exactly match the values defined in the code, including padding and border.",
        theory: {
        description: [
          "The box-sizing property controls how the total width and height of an element are calculated.",
          "By default, elements use `content-box`, meaning width and height only apply to the content area, not padding or border.",
          "Changing box-sizing affects layout calculations and can simplify handling element sizes with padding and border.",
          "It is essential for creating predictable, maintainable layouts, especially in complex designs."
        ],
        syntax: [
          "/* Default */\nbox-sizing: content-box;",
          "/* Include padding and border in \nwidth/height */\n\nbox-sizing: border-box;",
          "/* Apply to all elements */\n* {\n  box-sizing: border-box;\n}"
        ]
      },
        blocks: [
          {
            id: "initialStylePlayground",
            defaultCode: "/* Block 1 */\n.block1 {\nwidth: 100px;\nheight: 100px;\n\n}\n\n"
          },
          {
            id: "block1",
            group: "group1",
            initialStyle: { boxSizing: "content-box", width: "100px", height: "100px", background: 'var(--b-light)', borderRadius: '20px', border: '10px solid var(--highlight-yellow)' },
            defaultCode: "width: 100px;\nheight: 100px;\npadding: 20px;\nmargin: 10px;",
            solution: [{ width: "100px", height: "100px", boxSizing: "border-box" }],
            viewSolution: 'box-sizing: border-box;'
          },
          {
            id: "blockParent",
            style: {
              padding: "20px",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: 'center',
              justifyContent: 'center',
              gap: '50px'
            }
          }
        ],
        successMessage: "Perfect! You understand how box-sizing works."
      }
    ]
  },
  {
    level: 3,
    name: "Borders & Decoration",
    successMessage:  `You’ve successfully completed the Borders & Decoration level! You mastered essential CSS properties like border, outline and box-shadow. Keep experimenting and applying what you’ve learned`,
    defaultShowGrid: false,
    sublevels: [
      {
        id: 1,
        name: "border",
        evaluatedBlocks: ["block1", "block2"],
        totalBlocks: ["block1", "block2"],
        challenge: "Apply the border property shorthand to each block to match the target layout. Each block requires a different width and style.",
        theory: {
          description: [
            "The border property adds a visible edge around an element, separating it from surrounding content.",
            "A border requires three components to be visible: a width, a style, and a color.",
            "The shorthand border property lets you define all three in  a single declaration, in the order: width, style, color.",
            "You can also write each component separately using border-width, border-style, and border-color — useful when you need more control.",
            "Border style is the most critical component: without it, the border will not render even if width and color are set."
          ],
          syntax: [
            "/* Shorthand: width style color */\nborder: 2px solid #e94560;",
            "/* Shorthand with different style */\nborder: 4px dashed #ffffff;",
            "/* Dotted border */\nborder: 3px dotted orange;",
            "/* Using individual properties */\nborder-width: 2px;\nborder-style: solid;\nborder-color: #e94560;",
            "/* No border */\nborder: none;"
          ]
        },
        blocks: [
          {
            id: "initialStylePlayground",
            initialStyleBlock1: { width: "50px" },
            initialStyleBlock2: { width: "50px" },
            defaultCode: "/* Block 1 */\n.block1 {\nwidth: 300px;\nheight: 50px;\nbackground-color: lime;\n\n}\n\n/* Block 2 */\n.block2 {\nwidth: 300px;\nheight: 50px;\nbackground-color: hotpink;\n\n}",
            blockChildrenInside: false,
            blockChildrenOutside: false
          },
          {
            id: "block1",
            group: "group1",
            initialStyle: { position: "absolute", top:"25%", right: "20%", width: "300px", height: "50px", backgroundColor: "lime" },
            defaultCode: "",
            solution: [
              { border: "10px solid red" },
              { border: "solid 10px red" },
              { border: "red solid 10px" },
              { border: "10px solid #ff0000" },
              { border: "10px solid rgb(255, 0, 0)" },
              { borderWidth: "10px", borderStyle: "solid", borderColor: "red" },
              { borderWidth: "10px", borderStyle: "solid", borderColor: "#ff0000" },
              { borderWidth: "10px", borderStyle: "solid", borderColor: "rgb(255, 0, 0)" }
            ],
            viewSolution: 'border: 10px solid red;'
          },
          {
            id: "block2",
            group: "group2",
            initialStyle: { position: "absolute", bottom:"30%", left: "20%",width: "300px", height: "50px", backgroundColor: "hotpink", border: "5px" },
            defaultCode: "",
            solution: [
              { border: "3px dashed blue" },
              { border: "dashed 3px blue" },
              { border: "blue dashed 3px" },
              { border: "3px dashed #0000ff" },
              { border: "3px dashed rgb(0, 0, 255)" },
              { borderWidth: "3px", borderStyle: "dashed", borderColor: "blue" },
              { borderWidth: "3px", borderStyle: "dashed", borderColor: "#0000ff" },
              { borderWidth: "3px", borderStyle: "dashed", borderColor: "rgb(0, 0, 255)" }
            ],
            viewSolution: 'border: 3px dashed blue;'
          },
          {
            id: "blockParent",
            style: {
              position: "relative"
            }
          }
        ],
        successMessage: "Great! You've learned how border works."
      },
      {
        id: 2,
        name: "border-radius",
        evaluatedBlocks: ["block1", "block2"],
        totalBlocks: ["block1", "block2"],
        challenge: "Apply border-radius property to each block to match the target layout. One block has uniform rounded corners, the other is a perfect circle.",
        theory: {
          description: [
            "The border-radius property rounds the corners of an element's border box.",
            "A single value applies the same radius to all four corners simultaneously.",
            "You can target individual corners using border-top-left-radius, border-top-right-radius, border-bottom-right-radius, and border-bottom-left-radius.",
            "Using two values applies the first to top-left and bottom-right, and the second to top-right and bottom-left.",
            "A value of 50% on a square element produces a perfect circle."
          ],
          syntax: [
            "/* Same radius on all corners */\nborder-radius: 8px;",
            "/* Different radius per corner: top-left, top-right, bottom-right, bottom-left */\nborder-radius: 4px 12px 4px 12px;",
            "/* Perfect circle (on a square element) */\nborder-radius: 50%;",
            "/* Individual corners */\nborder-top-left-radius: 16px;\nborder-bottom-right-radius: 16px;",
            "/* Pill shape (on a wide element) */\nborder-radius: 999px;"
          ]
        },
        blocks: [
          {
            id: "initialStylePlayground",
            initialStyleBlock1: { width: "50px" },
            initialStyleBlock2: { width: "50px" },
            defaultCode: "/* Block 1 */\n.block1 {\nwidth: 100px;\nheight: 100px;\nbackground-color: cyan;\nborder: 3px solid red;\n\n}\n\n/* Block 2 */\n.block2 {\nwidth: 100px;\nheight: 100px;\nbackground-color: yellow;\nborder: 3px dashed green;\n\n}",
            blockChildrenInside: false,
            blockChildrenOutside: false
          },
          {
            id: "block1",
            group: "group1",
            initialStyle: { position: "absolute", top:"25%", left: "20%", width: "100px", height: "100px", backgroundColor: "cyan", border: "3px solid red" },
            defaultCode: "",
            solution: [
              { borderRadius: "10px" },
              { borderRadius: "10.0px" },
              { borderRadius: "10px 10px 10px 10px" },
              { borderTopLeftRadius: "10px", borderTopRightRadius: "10px", borderBottomRightRadius: "10px", borderBottomLeftRadius: "10px" },
              { borderRadius: "10.0px 10.0px 10.0px 10.0px" }
            ],
            viewSolution: 'border-radius: 10px;'
          },
          {
            id: "block2",
            group: "group2",
            initialStyle: {  position: "absolute", bottom:"30%", right: "20%", width: "100px", height: "100px", backgroundColor: "yellow", border: "3px dashed green" },
            defaultCode: "",
            solution: [
              { borderRadius: "50%" },
              { borderRadius: "50.0%" },
              { borderTopLeftRadius: "50%", borderTopRightRadius: "50%", borderBottomRightRadius: "50%", borderBottomLeftRadius: "50%" }
            ],
            viewSolution: 'border-radius: 50%;'
          },
          {
            id: "blockParent",
            style: {
              position: "relative"
            }
          }
        ],
        successMessage: "Great! You've learned how border-radius works."
      },
      {
        id: 3,
        name: "outline",
        evaluatedBlocks: ["block1", "block2"],
        totalBlocks: ["block1", "block2"],
        challenge: "Apply the outline property to each block to match the target layout. One block has a normal outline, while the other looks detached from the element due to an existing offset.",
        theory: {
          description: [
            "The outline property draws a line outside the element's border without affecting layout or size.",
            "Unlike borders, outlines do not take up space and may overlap other elements.",
            "You can control the outline's width, style, and color.",
            "Outlines do not support individual side control (no top, right, bottom, left separation).",
            "The outline-offset property lets you create space between the outline and the element."
          ],
          syntax: [
            "/* Basic outline */\noutline: 2px solid black;",
            "/* Different styles */\noutline: 4px dashed red;",
            "outline: 3px dotted blue;",
            "/* Outline with offset */\noutline: 2px solid green;\noutline-offset: 6px;",
            "/* Removing outline */\noutline: none;"
          ]
        },
        blocks: [
          {
            id: "initialStylePlayground",
            initialStyleBlock1: { width: "50px" },
            initialStyleBlock2: { width: "50px" },
            defaultCode: "/* Block 1 */\n.block1 {\nwidth: 300px;\nheight: 50px;\nbackground-color: sienna;\nborder-radius: 100px 40px 10px 0px;\n\n}\n\n/* Block 2 */\n.block2 {\nwidth: 50px;\nheight: 50px;\nbackground-color: deepskyblue;\nborder-radius: 50%;\noutline-offset: 25px\n\n}",
            blockChildrenInside: false,
            blockChildrenOutside: false
          },
          {
            id: "block1",
            group: "group1",
            initialStyle: {  position: "absolute", top:"15%", left: "13%", width: "300px", height: "50px", backgroundColor: "sienna", borderRadius: "100px 40px 10px 0px" },
            defaultCode: "",
            solution: [
              { outline: "10px solid red" },
              { outline: "solid 10px red" },
              { outline: "red solid 10px" },
              { outline: "10px solid #ff0000" },
              { outline: "10px solid rgb(255, 0, 0)" },
              { outlineWidth: "10px", outlineStyle: "solid", outlineColor: "red" },
              { outlineWidth: "10px", outlineStyle: "solid", outlineColor: "#ff0000" },
              { outlineWidth: "10px", outlineStyle: "solid", outlineColor: "rgb(255, 0, 0)" }
            ],
            viewSolution: 'outline: 10px solid red;'
          },
          {
            id: "block2",
            group: "group2",
            initialStyle: { position: "absolute", bottom:"30%", right: "20%", width: "50px", height: "50px", backgroundColor: "deepskyblue", borderRadius: "50%", outlineOffset: "25px" },
            defaultCode: "",
            solution: [
              { outline: "5px dashed red" },
              { outline: "dashed 5px red" },
              { outline: "red dashed 5px" },
              { outline: "5px dashed #ff0000" },
              { outline: "5px dashed rgb(255, 0, 0)" },
              { outlineWidth: "5px", outlineStyle: "dashed", outlineColor: "red" },
              { outlineWidth: "5px", outlineStyle: "dashed", outlineColor: "#ff0000" },
              { outlineWidth: "5px", outlineStyle: "dashed", outlineColor: "rgb(255, 0, 0)" }
            ],
            viewSolution: 'outline: 5px dashed red;'
          },
          {
            id: "blockParent",
            style: {
              position: "relative"
            }
          }
        ],
        successMessage: "Great! You've learned how outline works."
      },
      {
        id: 4,
        name: "box-shadow",
        evaluatedBlocks: ["block1", "block2"],
        totalBlocks: ["block1", "block2"],
        challenge: "Apply the box-shadow property to each block to match the target layout. Both blocks use a centered glow effect (no offset), but differ in spread and color intensity: the first block has a smaller green glow, while the second block has a larger red glow.",
        theory: {
          description: [
            "The box-shadow property adds shadow effects around an element's box.",
            "It is defined using horizontal offset, vertical offset, blur radius, spread radius, and color.",
            "When horizontal and vertical offsets are 0, the shadow is centered evenly around the element (glow effect).",
            "The blur radius controls how soft and wide the shadow appears.",
            "The spread radius increases or decreases the size of the shadow evenly in all directions.",
            "Different colors can be used to create glow-like visual effects."
          ],
          syntax: [
            "/* Centered glow shadow */\nbox-shadow: 0px 0px 50px 20px green;",
            "/* Stronger glow with larger spread */\nbox-shadow: 0px 0px 50px 40px red;",
            "/* Basic shadow with offset */\nbox-shadow: 4px 4px 10px rgba(0,0,0,0.3);",
            "/* Soft glow effect */\nbox-shadow: 0px 0px 30px 10px rgba(0, 255, 0, 0.5);",
            "/* Multiple shadows */\nbox-shadow: 0 0 20px rgba(0,0,0,0.2), 0 0 40px rgba(0,0,0,0.1);"
          ]
        },
        blocks: [
          {
            id: "initialStylePlayground",
            initialStyleBlock1: { width: "50px" },
            initialStyleBlock2: { width: "50px" },
            defaultCode: "/* Block 1 */\n.block1 {\nwidth: 50px;\nheight: 50px;\nbackground-color: orange;\nborder-radius: 50%;\nborder: 2px solid yellow;\noutline: 3px dotted green;\noutline-offset: 2px;\n\n}\n\n/* Block 2 */\n.block2 {\nwidth: 100px;\nheight: 100px;\nbackground-color: blue;\nborder-radius: 50%;\nborder: 1px solid white;\noutline: 3px dashed red;\noutline-offset: 15px\n\n}",
            blockChildrenInside: false,
            blockChildrenOutside: false
          },
          {
            id: "block1",
            group: "group1",
            initialStyle: {  position: "absolute", top:"20%", left: "15%", width: "50px", height: "50px", backgroundColor: "orange", borderRadius: "50%", outline: "3px dotted green", border: "2px solid yellow", outlineOffset: "2px" },
            defaultCode: "",
            solution: [
              { boxShadow: "0px 0px 50px 20px green" },
              { boxShadow: "0 0 50px 20px green" },
              { boxShadow: "0px 0px 50px 20px #008000" },
              { boxShadow: "0 0 50px 20px #008000" }
            ],
            viewSolution: 'box-shadow: 0px 0px 50px 20px green;'
          },
          {
            id: "block2",
            group: "group2",
            initialStyle: { position: "absolute", bottom:"23%", left: "58%", width: "100px", height: "100px", backgroundColor: "blue", borderRadius: "50%", border: "1px solid white", outline: "3px dashed red", outlineOffset: "15px" },
            defaultCode: "",
            solution: [
              { boxShadow: "0px 0px 50px 40px red" },
              { boxShadow: "0 0 50px 40px red" },
              { boxShadow: "0px 0px 50px 40px #ff0000" },
              { boxShadow: "0 0 50px 40px #ff0000" }
            ],
            viewSolution: 'box-shadow: 0px 0px 50px 40px red;'
          },
          {
            id: "blockParent",
            style: {
              position: "relative"
            }
          }
        ],
        successMessage: "Great! You've learned how box-shadow works."
      }
    ]
  },
  {
    level: 6,
    name: "Positioning & Display",
    successMessage: `You’ve successfully completed the Positioning & Display level! You mastered essential CSS properties like display, position, z-index and more. Keep experimenting and applying what you’ve learned`,
    defaultShowGrid: true,
    sublevels: [
      // Sublevel 1: DISPLAY
      {
        id: 1,
        name: "display",
        evaluatedBlocks: ["block1", "block2"],
        totalBlocks: ["block1", "block2"],
        challenge: "Both blocks are stacking as full-width block elements. Apply the display property: inline-block to both so they appear side by side on the same line.",
        theory: {
          description: [
            "The display property defines how an element is rendered in the document flow.",
            "block elements take up the full width of their container and always start on a new line.",
            "inline-block elements flow inline like text but can still have width and height.",
            "inline elements flow with text and ignore width or height settings.",
            "Setting display: none hides an element completely, removing it from the layout."
          ],
          syntax: [
            "/* Takes full width, stacks vertically */\ndisplay: block;",
            "/* Flows inline, keeps dimensions */\ndisplay: inline-block;",
            "/* Flows with text, ignores dimensions */\ndisplay: inline;",
            "/* Hides element completely */\ndisplay: none;",
            "/* Enables flexbox layout */\ndisplay: flex;"
          ]
        },
        blocks: [
          {
            id: "initialStylePlayground",
            defaultCode: "/* Block 1 */\n.block1 {\nwidth: 100px;\nheight: 100px;\nborder-radius: 12px;\nbackground-color: #ec4899;\n\n}\n\n/* Block 2 */\n.block2 {\nwidth: 100px;\nheight: 100px;\nborder-radius: 12px;\nbackground-color: #3b82f6;\n\n}",
            blockChildrenInside: false,
            blockChildrenOutside: false
          },
          {
            id: "block1",
            group: "group1",
            initialStyle: { display: "block", width: "100px", height: "100px", background: "#ec4899", borderRadius: "12px", marginBottom: "10px", marginRight: "10px" },
            defaultCode: "",
            solution: [{ display: "inline-block" }],
            viewSolution: "display: inline-block;"
          },
          {
            id: "block2",
            group: "group2",
            initialStyle: { display: "block", width: "100px", height: "100px", background: "#3b82f6", borderRadius: "12px", marginBottom: "10px", marginRight: "10px" },
            defaultCode: "",
            solution: [{ display: "inline-block" }],
            viewSolution: "display: inline-block;"
          },
          {
            id: "blockParent",
            style: {
              padding: "50px",
              height: "100%"
            }
          }
        ],
        successMessage: "Great! You’ve learned how display works."
      },

      // Sublevel 2: POSITION
      {
        id: 2,
        name: "position",
        evaluatedBlocks: ["block1"],
        totalBlocks: ["block1"],
        challenge: "The block sits in its natural flow position. Apply position property in absolute and use bottom: 20px and right: 20px to pin it to the bottom-right corner of the container.",
        theory: {
          description: [
            "The position property controls how an element is placed in the document.",
            "static is the default: elements follow the normal document flow and ignore offset properties.",
            "relative keeps the element in the flow but allows offset from its natural position using top, right, bottom, and left.",
            "absolute removes the element from the flow and positions it relative to its nearest positioned ancestor.",
            "fixed positions relative to the viewport, and sticky switches between relative and fixed based on scroll."
          ],
          syntax: [
            "/* Default: normal flow, offsets ignored */\nposition: static;",
            "/* Offset from natural position */\nposition: relative;",
            "/* Removed from flow, positioned within ancestor */\nposition: absolute;",
            "/* Fixed to the viewport */\nposition: fixed;",
            "/* Sticks at a scroll threshold */\nposition: sticky;\ntop: 0;"
          ]
        },
        blocks: [
          {
            id: "initialStylePlayground",
            defaultCode: "/* Block 1 */\n.block1 {\nwidth: 80px;\nheight: 80px;\nborder-radius: 12px;\nbackground-color: #6366f1;\n\n}",
            blockChildrenInside: false,
            blockChildrenOutside: false
          },
          {
            id: "block1",
            group: "group1",
            initialStyle: { width: "80px", height: "80px", borderRadius: "12px", background: "#6366f1", margin: "6px 0 0  6px" },
            defaultCode: "width: 80px;\nheight: 80px;\nborder-radius: 12px;",
            solution: [
              { width: "80px", height: "80px", borderRadius: "12px", bottom: "20px", right: "20px", position: "absolute" }
            ],
            viewSolution: "position: absolute;\nbottom: 20px;\nright: 20px;"
          },
          {
            id: "blockParent",
            style: {
              position: "relative",
              height: "100%",
              outline: "2px dashed var(--highlight-red)",
              outlineOffset: "-6px"
            }
          }
        ],
        successMessage: "Great! You’ve learned how position works."
      },

      // Sublevel 3: TOP / LEFT / BOTTOM / RIGHT
      {
        id: 3,
        name: "offset",
        evaluatedBlocks: ["block1"],
        totalBlocks: ["block1"],
        challenge: "The block is set to position: relative. Apply the offset property — top and left — to shift it so it matches the target position.",
        theory: {
          description: [
            "The offset properties top, right, bottom, and left control the displacement of a positioned element.",
            "They only work when position is set to relative, absolute, fixed, or sticky.",
            "With position: relative, offsets shift the element from its natural flow position without affecting surrounding elements.",
            "With position: absolute, offsets position the element inside its nearest positioned ancestor.",
            "Positive values push inward (top pushes down, left pushes right), negative values push outward."
          ],
          syntax: [
            "/* Push down from natural position */\nposition: relative;\ntop: 30px;",
            "/* Move right */\nposition: relative;\nleft: 50px;",
            "/* Pin to top-left corner */\nposition: absolute;\ntop: 0;\nleft: 0;",
            "/* Pin to bottom-right corner */\nposition: absolute;\nbottom: 0;\nright: 0;",
            "/* Negative offset (push up) */\nposition: relative;\ntop: -20px;"
          ]
        },
        blocks: [
          {
            id: "initialStylePlayground",
            defaultCode: "/* Block 1 */\n.block1 {\nposition: relative;\n\n}",
            blockChildrenInside: false,
            blockChildrenOutside: false
          },
          {
            id: "block1",
            group: "group1",
            initialStyle: { position: "relative", width: "100px", height: "100px", background: "var(--b-light)", borderRadius: "12px" },
            defaultCode: "position: relative;",
            solution: [
              { position: "relative", top: "100px", left: "150px" }
            ],
            viewSolution: "top: 100px;\nleft: 150px;"
          },
          {
            id: "blockParent",
            style: {
              padding: "0px",
              height: "100%"
            }
          }
        ],
        successMessage: "Great! You’ve learned how top, left, bottom, and right work."
      },

      // Sublevel 4: Z-INDEX
      {
        id: 4,
        name: "z-index",
        evaluatedBlocks: ["block1", "block2"],
        totalBlocks: ["block1", "block2"],
        challenge: "Both blocks overlap. Currently the blue block is on top of the pink one. Apply the z-index property so that the pink block appears in front and the blue block goes behind.",
        theory: {
          description: [
            "The z-index property controls the stacking order of positioned elements along the Z axis.",
            "It only works on elements with a position value other than static.",
            "Elements with a higher z-index appear in front of elements with a lower value.",
            "By default, elements later in the DOM stack on top of earlier elements at the same level.",
            "Negative z-index values push elements behind the normal document flow."
          ],
          syntax: [
            "/* Element on top */\nposition: absolute;\nz-index: 2;",
            "/* Element behind */\nposition: absolute;\nz-index: 1;",
            "/* Force element to back */\nposition: absolute;\nz-index: -1;",
            "/* Highest stacking order */\nposition: absolute;\nz-index: 999;"
          ]
        },
        blocks: [
          {
            id: "initialStylePlayground",
            defaultCode: "/* Block 1 */\n.block1 {\nposition: absolute;\ntop: 25%;\nleft: 30%;\nwidth: 150px;\nheight: 150px;\nbackground: #4a90e2;\nborder-radius: 12px;\n\n}\n\n/* Block 2 */\n.block2 {\nposition: absolute;\ntop: 33%;\nleft: 40%;\nwidth: 150px;\nheight: 150px;\nbackground: #d67ad0;\nborder-radius: 12px;\n\n}",
            blockChildrenInside: false,
            blockChildrenOutside: false
          },
          {
            id: "block1",
            group: "group1",
            initialStyle: { position: "absolute", top: "25%", left: "30%", width: "150px", height: "150px", background: "#4a90e2", borderRadius: "12px", zIndex: "2" },
            defaultCode: "position: absolute;\ntop: 25%;\nleft: 30%;\nwidth: 150px;\nheight: 150px;\nbackground: #4a90e2;\nborder-radius: 12px;",
            solution: [{ position: "absolute", top: "25%", left: "30%", width: "150px", height: "150px", background: "#4a90e2", borderRadius: "12px", zIndex: "1" }],
            viewSolution: "z-index: 1;"
          },
          {
            id: "block2",
            group: "group2",
            initialStyle: { position: "absolute", top: "33%", left: "40%", width: "150px", height: "150px", background: "#d67ad0", borderRadius: "12px", zIndex: "1" },
            defaultCode: "position: absolute;\ntop: 33%;\nleft: 40%;\nwidth: 150px;\nheight: 150px;\nbackground: #d67ad0;\nborder-radius: 12px;",
            solution: [{ position: "absolute", top: "33%", left: "40%", width: "150px", height: "150px", background: "#d67ad0", borderRadius: "12px", zIndex: "2" }],
            viewSolution: "z-index: 2;"
          },
          {
            id: "blockParent",
            style: {
              position: "relative",
              height: "100%"
            }
          }
        ],
        successMessage: "Great! You’ve learned how z-index works."
      },

      // Sublevel 5: FLOAT
      {
        id: 5,
        name: "float",
        evaluatedBlocks: ["block1", "block2"],
        totalBlocks: ["block1", "block2"],
        challenge: "Apply float: left to block1 and float: right to block2 so they appear anchored to opposite sides of the container.",
        theory: {
          description: [
            "The float property removes an element from the normal document flow and pushes it to the left or right of its container.",
            "Floated elements allow surrounding content and inline elements to wrap around them.",
            "Common values are left, right, and none (the default).",
            "Floats were widely used for layouts before flexbox and grid, and are still useful for text wrapping.",
            "Adjacent block content collapses around floated elements unless cleared."
          ],
          syntax: [
            "/* Float to the left */\nfloat: left;",
            "/* Float to the right */\nfloat: right;",
            "/* Remove float */\nfloat: none;",
            "/* Image with text wrapping */\nimg {\n  float: left;\n  margin-right: 10px;\n}"
          ]
        },
        blocks: [
          {
            id: "initialStylePlayground",
            defaultCode: "/* Block 1 */\n.block1 {\nwidth: 100px;\nheight: 100px;\nbackground: #55e06f;\nborder-radius: 12px;\n\n}\n\n/* Block 2 */\n.block2 {\nwidth: 100px;\nheight: 100px;\nbackground: #e94560;\nborder-radius: 12px;\n\n}",
            blockChildrenInside: false,
            blockChildrenOutside: false
          },
          {
            id: "block1",
            group: "group1",
            initialStyle: { width: "100px", height: "100px", background: "#55e06f", borderRadius: "12px" },
            defaultCode: "width: 100px;\nheight: 100px;\nbackground: #55e06f;\nborder-radius: 12px;",
            solution: [{ width: "100px", height: "100px", background: "#55e06f", borderRadius: "12px", float: "left" }],
            viewSolution: "float: left;"
          },
          {
            id: "block2",
            group: "group2",
            initialStyle: { width: "100px", height: "100px", background: "#e94560", borderRadius: "12px", overflow: "hidden" },
            defaultCode: "width: 100px;\nheight: 100px;\nbackground: #e94560;\nborder-radius: 12px;",
            solution: [{ width: "100px", height: "100px", background: "#e94560", borderRadius: "12px", float: "right" }],
            viewSolution: "float: right;"
          },
          {
            id: "blockParent",
            style: {
              padding: "50px",
              height: "100%",
              overflow: "hidden"
            }
          }
        ],
        successMessage: "Great! You’ve learned how float works."
      },

      // Sublevel 6: CLEAR
      {
        id: 6,
        name: "clear",
        evaluatedBlocks: ["block2"],
        totalBlocks: ["block1", "block2"],
        challenge: "Block1 is floating left. Block2 is wrapping alongside it. Apply clear: both to block2 so it moves below the float and starts on a new line.",
        theory: {
          description: [
            "The clear property prevents an element from sitting next to floated elements.",
            "It forces the element to move below any floats on the specified side.",
            "clear: left clears left floats, clear: right clears right floats, and clear: both clears all floats.",
            "Without clear, block elements wrap alongside floated content.",
            "clear is commonly used after float-based layouts to restore normal document flow."
          ],
          syntax: [
            "/* Move below left floats */\nclear: left;",
            "/* Move below right floats */\nclear: right;",
            "/* Move below all floats */\nclear: both;",
            "/* Default: no clearing */\nclear: none;"
          ]
        },
        blocks: [
          {
            id: "initialStylePlayground",
            defaultCode: "/* Block 1 */\n.block1 {\nfloat: left;\nwidth: 80px;\nheight: 80px;\nbackground: #4a90e2;\nborder-radius: 12px;\n}\n\n/* Block 2 */\n.block2 {\nwidth: 200px;\nheight: 50px;\nbackground: #e94560;\nborder-radius: 12px;\n\n}",
            blockChildrenInside: false,
            blockChildrenOutside: false
          },
          {
            id: "block1",
            group: "group1",
            initialStyle: { float: "left", width: "80px", height: "80px", background: "#4a90e2", borderRadius: "12px", margin: "0px 10px 20px 0px" }
          },
          {
            id: "block2",
            group: "group2",
            initialStyle: { width: "200px", height: "50px", background: "#e94560", borderRadius: "12px" },
            defaultCode: "width: 200px;\nheight: 50px;\nbackground: #e94560;\nborder-radius: 12px;",
            solution: [
              { width: "200px", height: "50px", background: "#e94560", borderRadius: "12px", clear: "both" },
              { width: "200px", height: "50px", background: "#e94560", borderRadius: "12px", clear: "left" }
            ],
            viewSolution: "clear: both;"
          },
          {
            id: "blockParent",
            style: {
              padding: "50px",
              height: "100%"
            }
          }
        ],
        successMessage: "Great! You’ve learned how clear works."
      },

      // Sublevel 7: OVERFLOW
      {
        id: 7,
        name: "overflow",
        evaluatedBlocks: ["block1", "block2"],
        totalBlocks: ["block1", "block2"],
        challenge: "Both blocks have more content than fits inside. Apply overflow: hidden to block1 to clip the excess, and overflow: auto to block2 to make it scrollable.",
        theory: {
          description: [
            "The overflow property controls what happens when content is larger than its container.",
            "visible is the default: content spills outside the element’s boundary.",
            "hidden clips the overflowing content, making it invisible beyond the element’s edges.",
            "scroll always shows scrollbars, even when the content fits inside.",
            "auto adds scrollbars only when needed, hiding them when content fits."
          ],
          syntax: [
            "/* Default: content overflows */\noverflow: visible;",
            "/* Clip overflowing content */\noverflow: hidden;",
            "/* Always show scrollbars */\noverflow: scroll;",
            "/* Scrollbars only when needed */\noverflow: auto;",
            "/* Control axes separately */\noverflow-x: hidden;\noverflow-y: scroll;"
          ]
        },
        blocks: [
          {
            id: "initialStylePlayground",
            defaultCode: "/* Block 1 */\n.block1 {\nwidth: 130px;\nheight: 80px;\n\n}\n\n/* Block 2 */\n.block2 {\nwidth: 130px;\nheight: 80px;\n\n}",
            blockChildrenInside: false,
            blockChildrenOutside: false
          },
          {
            id: "block1",
            group: "group1",
            initialStyle: { width: "130px", height: "80px", borderRadius: "var(--border-txt-md)", padding: "10px 10px", textAlign: "center", fontSize: "13px", fontWeight: "300", outline: "1px solid #ef535061", filter: "drop-shadow(0 0 15px #ef535061)", background: "var(--gradient-darkest)" },
            defaultCode: "width: 130px;\nheight: 80px;",
            text: "This text is much longer than the box and will overflow beyond its boundaries if not clipped.",
            solution: [
              { width: "130px", height: "80px", overflow: "hidden" }
            ],
            viewSolution: "overflow: hidden;"
          },
          {
            id: "block2",
            group: "group2",
            initialStyle: { width: "130px", height: "80px", borderRadius: "var(--border-txt-md)", padding: "10px 10px", textAlign: "center", fontSize: "13px", fontWeight: "300", outline: "1px solid #26a69a61", filter: "drop-shadow(0 0 15px #26a69a61)", background: "var(--gradient-darkest)" },
            defaultCode: "width: 130px;\nheight: 80px;",
            text: "This text is also too long to fit. Apply overflow: auto so the user can scroll through all of it.",
            solution: [
              { width: "130px", height: "80px", overflow: "auto" }
            ],
            viewSolution: "overflow: auto;"
          },
          {
            id: "blockParent",
            style: {
              padding: "20px",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "25px"
            }
          }
        ],
        successMessage: "Great! You’ve learned how overflow works."
      }
    ]
  }
];


export default levels;
