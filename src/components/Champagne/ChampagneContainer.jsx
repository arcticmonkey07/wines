import React from 'react';
import {addDialogActionCreator, updateNewDialogTextActionCreator} from "../../redux/store.js";

const ChampagneContainer = (props) => {
  let dialogElements = props.store.dialogs.dialogPosts.map( d => <p>{d.message}</p>)

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addDialogActionCreator());
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    let action = updateNewDialogTextActionCreator(text);
    props.dispatch(action);
  }

  return (
      <div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet nihil quaerat soluta. Cupiditate eaque laudantium neque quis? Officiis, perspiciatis veritatis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet nihil quaerat soluta. Cupiditate eaque laudantium neque quis? Officiis, perspiciatis veritatis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet nihil quaerat soluta. Cupiditate eaque laudantium neque quis? Officiis, perspiciatis veritatis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet nihil quaerat soluta. Cupiditate eaque laudantium neque quis? Officiis, perspiciatis veritatis!</p>
        <input type="text" onChange={ onPostChange } ref={newPostElement} value={props.store.dialogs.newDialogText}/>
        <button onClick={ addPost }>Отправить</button>
        { dialogElements }
      </div>
  )
}

export default ChampagneContainer;