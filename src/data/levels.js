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
            initialStyle: { borderRadius: "var(--border-txt-md)", padding: "5px 15px", fontSize: "20px", fontWeight: "bold", outline: "1px solid #ffca2961", filter: "drop-shadow(0 0 15px #ffca2961)", background: "var(--gradient-darkest)", fontFamily: "sans-serif"},
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
            initialStyle: { borderRadius: "var(--border-txt-md)", padding: "5px 12px", fontSize: "20px", fontWeight: "bold", outline: "1px solid #ffca2961", filter: "drop-shadow(0 0 15px #ffca2961)", background: "var(--gradient-darkest)", fontFamily: "sans-serif"},
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
            initialStyle: { borderRadius: "var(--border-txt-md)", padding: "5px 15px", fontSize: "20px", fontWeight: "bold", outline: "1px solid #ffca2961", filter: "drop-shadow(0 0 15px #ffca2961)", background: "var(--gradient-darkest)"},
            defaultCode: "",
            text: '50px HUGE!',
            solution: [{ fontSize: "50px" }],
            viewSolution: 'font-size: 50px;'
          },
          {
            id: "block2",
            group: "group2",
            initialStyle: { borderRadius: "var(--border-txt-md)", padding: "5px 12px", fontSize: "20px", fontWeight: "bold", outline: "1px solid #ffca2961", filter: "drop-shadow(0 0 15px #ffca2961)", background: "var(--gradient-darkest)"},
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
            initialStyle: { borderRadius: "var(--border-txt-xl)", padding: "5px 15px", fontSize: "45px", fontWeight: "300", outline: "1px solid #ffca2961", filter: "drop-shadow(0 0 15px #ffca2961)", background: "var(--gradient-darkest)"},
            defaultCode: "",
            text: 'I am 900!',
            solution: [{ fontWeight: "900" }],
            viewSolution: 'font-weight: 900;'
          },
          {
            id: "block2",
            group: "group2",
            initialStyle: { borderRadius: "var(--border-txt-xl)", padding: "5px 12px", fontSize: "45px", fontWeight: "300", outline: "1px solid #ffca2961", filter: "drop-shadow(0 0 15px #ffca2961)", background: "var(--gradient-darkest)"},
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
            initialStyle: { borderRadius: "var(--border-txt-md)", padding: "10px 10px", textAlign: "center", fontSize: "13px", fontWeight: "300", outline: "1px solid #ffca2961", filter: "drop-shadow(0 0 15px #ffca2961)", background: "var(--gradient-darkest)", width: "220px"},
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
            initialStyle: { borderRadius: "var(--border-txt-md)", padding: "10px 20px", textAlign: "right", fontSize: "13px", fontWeight: "300", outline: "1px solid #ffca2961", filter: "drop-shadow(0 0 15px #ffca2961)", background: "var(--gradient-darkest)", lineHeight: "2", width: "220px"},
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
            defaultCode: "/* Block 1 */\n.block1 {\n\n}\n\n/* Block 2 */\n.block2 {\n\n}",
            blockChildrenInside: false,
            blockChildrenOutside: false
          },
          {
            id: "block1",
            group: "group1",
            initialStyle: { width: "50px", height: "50px", background: 'var(--b-light)', borderRadius: '20px'},
            defaultCode: "",
            solution: [{ width: "150px" }],
            viewSolution: 'width: 150px;'
          },
          {
            id: "block2",
            group: "group2",
            initialStyle: { width: "50px", height: "50px", background: 'var(--b-light)', borderRadius: '20px'},
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
            defaultCode: '/* Block 1 */\n.block1 {\nwidth: 100px;\n\n}\n\n/* Block 2 */\n.block2 {\nwidth: 100px;\n\n}',
            blockChildrenInside: false,
            blockChildrenOutside: false
          },
          {
            id: "block1",
            group: "group1",
            initialStyle: { height: "50px", width: "100px", background: 'var(--b-light)', borderRadius: '20px'},
            defaultCode: "width: 100px;",
            solution: [{ width: "100px", height: "120px" }],
            viewSolution: 'height: 120px;'
          },
          {
            id: "block2",
            group: "group2",
            initialStyle: { height: "50px", width: "100px", background: 'var(--b-light)', borderRadius: '20px'},
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
            initialStyle: { width: "200px", height: "50px", background: 'var(--b-light)'},
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
            initialStyle: { width: "200px", height: "50px", background: 'var(--b-light)'},
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
            defaultCode: "/* Block 1 */\n.block1 {\nwidth: 150px;\nheight: 100px;\n\n}",
            blockChildrenInside: false,
            blockChildrenOutside: false
          },
          {
            id: "block1",
            group: "group1",
            initialStyle: { width: "150px", height: "100px", background: 'var(--b-light)', borderRadius: '20px' },
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
    successMessage:  `You’ve successfully completed the Borders and Corners level! You mastered essential CSS properties like border, border-color and outline. Keep experimenting and applying what you’ve learned`,
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
            "The shorthand border property lets you define all three in a single declaration, in the order: width, style, color.",
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
            solution: [{ border: "10px solid red" }],
            viewSolution: 'border: 10px solid red;'
          },
          {
            id: "block2",
            group: "group2",
            initialStyle: { position: "absolute", bottom:"30%", left: "20%",width: "300px", height: "50px", backgroundColor: "hotpink", border: "5px" },
            defaultCode: "",
            solution: [{ border: "3px dashed blue" }],
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
            solution: [{ borderRadius: "10px"}],
            viewSolution: 'border-radius: 10px;'
          },
          {
            id: "block2",
            group: "group2",
            initialStyle: {  position: "absolute", bottom:"30%", right: "20%", width: "100px", height: "100px", backgroundColor: "yellow", border: "3px dashed blue" },
            defaultCode: "",
            solution: [{ borderRadius: '50%' }],
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
            initialStyle: { borderRadius: "var(--border-txt-md)", padding: "5px 15px", fontSize: "20px", fontWeight: "bold", outline: "1px solid #ffca2961", filter: "drop-shadow(0 0 15px #ffca2961)", background: "var(--gradient-darkest)", fontFamily: "sans-serif"},
            defaultCode: "",
            solution: [
              { fontFamily: "monospace" },
              { fontFamily: "Monospace" }
            ],
            viewSolution: 'font-family: Monospace;'
          },
          {
            id: "block2",
            group: "group2",
            initialStyle: { borderRadius: "var(--border-txt-md)", padding: "5px 12px", fontSize: "20px", fontWeight: "bold", outline: "1px solid #ffca2961", filter: "drop-shadow(0 0 15px #ffca2961)", background: "var(--gradient-darkest)", fontFamily: "sans-serif"},
            defaultCode: "",
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
            initialStyle: { borderRadius: "var(--border-txt-md)", padding: "5px 15px", fontSize: "20px", fontWeight: "bold", outline: "1px solid #ffca2961", filter: "drop-shadow(0 0 15px #ffca2961)", background: "var(--gradient-darkest)"},
            defaultCode: "",
            text: '50px HUGE!',
            solution: [{ fontSize: "50px" }],
            viewSolution: 'font-size: 50px;'
          },
          {
            id: "block2",
            group: "group2",
            initialStyle: { borderRadius: "var(--border-txt-md)", padding: "5px 12px", fontSize: "20px", fontWeight: "bold", outline: "1px solid #ffca2961", filter: "drop-shadow(0 0 15px #ffca2961)", background: "var(--gradient-darkest)"},
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
            initialStyle: { borderRadius: "var(--border-txt-xl)", padding: "5px 15px", fontSize: "45px", fontWeight: "300", outline: "1px solid #ffca2961", filter: "drop-shadow(0 0 15px #ffca2961)", background: "var(--gradient-darkest)"},
            defaultCode: "",
            text: 'I am 900!',
            solution: [{ fontWeight: "900" }],
            viewSolution: 'font-weight: 900;'
          },
          {
            id: "block2",
            group: "group2",
            initialStyle: { borderRadius: "var(--border-txt-xl)", padding: "5px 12px", fontSize: "45px", fontWeight: "300", outline: "1px solid #ffca2961", filter: "drop-shadow(0 0 15px #ffca2961)", background: "var(--gradient-darkest)"},
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
            initialStyle: { borderRadius: "var(--border-txt-md)", padding: "10px 10px", textAlign: "center", fontSize: "13px", fontWeight: "300", outline: "1px solid #ffca2961", filter: "drop-shadow(0 0 15px #ffca2961)", background: "var(--gradient-darkest)", width: "220px"},
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
      }
    ]
  }
];


export default levels;
