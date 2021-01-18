import React, { Component } from 'react';
import { Remarkable } from 'remarkable';
import './App.css';


const defaultMd = `# Reindeer Cookies Your Family Will Absolutely Love this Holiday
---
![Reindeer Cookies](https://i0.wp.com/lmld.org/wp-content/uploads/2015/12/reindeer-cookies-3.jpg?w=650&ssl=1)
**INGREDIENTS**

- 1 box chocolate cake mix
- 2 large eggs
- 1/3 cup vegetable oil
- 1 can chocolate frosting (1-2 cups of homemade chocolate frosting)
- 24-28 mini Nilla Wafers
- 24-28 red and brown m&ms
- 1 package candy eyes
- 48-56 mini pretzels

---

**INSTRUCTIONS**

1. Preheat your oven to 350 degrees.

2. In a medium sized bowl combine your cake mix, eggs and vegetable oil and stir together to make a thick cookie batter.

3. Scoop 1 1/2 - 2 TBS of dough and roll into a ball. Repeat with additional dough.

4. Place 12 cookies onto a cookie sheet lined with parchment paper or a silicone liner.

5. Bake cookies for about 8 minutes until the tops start to get crinkly.

6. Remove from oven and allow to cool for 2 minutes on baking sheet.

7. Transfer to cooling rack to cool completely.

8. Spread frosting over the top of a cookie.

9. Place one nilla wafer onto the bottom half of cookie.

10. Place two candy eyes above the nilla wafer.

11. Place two pretzels above the eyes like antlers.

12. Attach one m&m to each Nilla wafer using frosting.

13. Allow frosting to set and serve!

*For more recipes like this visit [Like mother like daughter](https://lmld.org/reindeer-cookies/).* 
`

class App extends React.Component {
  constructor(props) {
    super(props);
    this.mdConvert = new Remarkable();
    this.handleChange = this.handleChange.bind(this);
    this.state = { value: defaultMd };  
    
  }
  
  handleChange(event) {
    this.setState({ value: event.target.value}); 
  }
  
  convertToMarkdown() {
    return { __html: this.mdConvert.render(this.state.value )};
  }
  
  render() {
    return (
      <div className= 'container'>
       <div className= 'left'>
        <h2> Editor </h2>
        <div className= 'markdownEditor'> 
        <textarea
          id='editor-content'
          onChange={ this.handleChange }
          defaultValue={ this.state.value }
          />
         </div>
       </div>
        <div className= 'right'>
        <h2> Previewer </h2>
        <div 
          className='md-content'
          dangerouslySetInnerHTML={ this.convertToMarkdown() }
          />
        </div>
        </div>
     
    );
  }
}



export default App;
