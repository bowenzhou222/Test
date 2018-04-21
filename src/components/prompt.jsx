import React from 'react'
import { Prompt } from 'react-router'
import { Link } from 'react-router-dom'

const PromptUnsavedMessage = ({ unsavedChanges, message }) => {
  return (
    <Prompt
      when={unsavedChanges}
      message={ message ? message : 'Unsaved changes will be lost' }
    />
  );
}

export default PromptUnsavedMessage;