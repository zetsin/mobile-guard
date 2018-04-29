import React from 'react'
import { withStyles } from 'material-ui/styles'

import question from 'images/question.png'
import background from 'images/background.png'

import scene1_window from 'images/scene1/window.png'
import scene1_shadow from 'images/scene1/shadow.png'
import scene1_me from 'images/scene1/me.png'
import scene1_desc from 'images/scene1/desc.png'
import scene1_answer1 from 'images/scene1/answer1.png'
import scene1_answer2 from 'images/scene1/answer2.png'
import scene1_answer3 from 'images/scene1/answer3.png'

import scene2_corner from 'images/scene2/corner.png'
import scene2_hand from 'images/scene2/hand.png'
import scene2_light from 'images/scene2/light.png'
import scene2_speechless from 'images/scene2/speechless.png'
import scene2_black from 'images/scene2/black.png'
import scene2_me from 'images/scene2/me.png'
import scene2_desc from 'images/scene2/desc.png'
import scene2_answer1 from 'images/scene2/answer1.png'
import scene2_answer2 from 'images/scene2/answer2.png'
import scene2_answer3 from 'images/scene2/answer3.png'

import scene3_door from 'images/scene3/door.png'
import scene3_parents from 'images/scene3/parents.png'
import scene3_talking from 'images/scene3/talking.png'
import scene3_me from 'images/scene3/me.png'
import scene3_desc from 'images/scene3/desc.png'
import scene3_answer1 from 'images/scene3/answer1.png'
import scene3_answer2 from 'images/scene3/answer2.png'
import scene3_answer3 from 'images/scene3/answer3.png'

import scene4_light from 'images/scene4/light.png'
import scene4_wall from 'images/scene4/wall.png'
import scene4_talking from 'images/scene4/talking.png'
import scene4_me from 'images/scene4/me.png'
import scene4_desc from 'images/scene4/desc.png'
import scene4_answer1 from 'images/scene4/answer1.png'
import scene4_answer2 from 'images/scene4/answer2.png'
import scene4_answer3 from 'images/scene4/answer3.png'

const styles = {
  root: {
    display: 'none'
  }
}

class Comp extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <img alt="question" src={question} />
        <img alt="background" src={background} />
        
        <img alt="scene1_window" src={scene1_window} />
        <img alt="scene1_shadow" src={scene1_shadow} />
        <img alt="scene1_me" src={scene1_me} />
        <img alt="scene1_desc" src={scene1_desc} />
        <img alt="scene1_answer1" src={scene1_answer1} />
        <img alt="scene1_answer2" src={scene1_answer2} />
        <img alt="scene1_answer3" src={scene1_answer3} />

        <img alt="scene2_corner" src={scene2_corner} />
        <img alt="scene2_hand" src={scene2_hand} />
        <img alt="scene2_light" src={scene2_light} />
        <img alt="scene2_speechless" src={scene2_speechless} />
        <img alt="scene2_black" src={scene2_black} />
        <img alt="scene2_me" src={scene2_me} />
        <img alt="scene2_desc" src={scene2_desc} />
        <img alt="scene2_answer1" src={scene2_answer1} />
        <img alt="scene2_answer2" src={scene2_answer2} />
        <img alt="scene2_answer3" src={scene2_answer3} />

        <img alt="scene3_door" src={scene3_door} />
        <img alt="scene3_parents" src={scene3_parents} />
        <img alt="scene3_talking" src={scene3_talking} />
        <img alt="scene3_me" src={scene3_me} />
        <img alt="scene3_desc" src={scene3_desc} />
        <img alt="scene3_answer1" src={scene3_answer1} />
        <img alt="scene3_answer2" src={scene3_answer2} />
        <img alt="scene3_answer3" src={scene3_answer3} />

        <img alt="scene4_light" src={scene4_light} />
        <img alt="scene4_wall" src={scene4_wall} />
        <img alt="scene4_talking" src={scene4_talking} />
        <img alt="scene4_me" src={scene4_me} />
        <img alt="scene4_desc" src={scene4_desc} />
        <img alt="scene4_answer1" src={scene4_answer1} />
        <img alt="scene4_answer2" src={scene4_answer2} />
        <img alt="scene4_answer3" src={scene4_answer3} />
      </div>
    )
  }
}

export default withStyles(styles)(Comp)
