import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import './style/FileDrop.css'
// import extractMetadata from '../../utils/extractMetadata'

const FileDrop = ({ getAcceptedFiles }) => {
  const onDrop = useCallback(acceptedFiles => {
    if (acceptedFiles.length === 0 || acceptedFiles.length > 20) return
    console.log('acceptedFiles:', acceptedFiles)

    getAcceptedFiles(acceptedFiles)
  }, [getAcceptedFiles])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  return (
    <div className="file-drop" {...getRootProps()}>
      <input {...getInputProps()} />
      {
        isDragActive ?
          <p>Drop the files here ...</p> : <>
            <p>Drag 'n' drop some song files here,</p>
            <p>or click to select those files</p></>
      }
    </div>
  )
}

export default FileDrop