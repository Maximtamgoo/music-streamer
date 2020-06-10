/* eslint-disable no-unused-vars */
import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import style from './style/FileDrop.module.css'
import { MdArrowDropUp, MdArrowDropDown, MdCloudUpload, MdFileUpload } from 'react-icons/md'

const FileDrop = ({ getAcceptedFiles }) => {
  const onDrop = useCallback(acceptedFiles => {
    if (acceptedFiles.length === 0 || acceptedFiles.length > 20) return
    console.log('acceptedFiles:', acceptedFiles)

    getAcceptedFiles(acceptedFiles)
  }, [getAcceptedFiles])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  return (
    <div className={style["file-drop"]} {...getRootProps()}>
      <input {...getInputProps()} />
      <MdCloudUpload className={style.icontest}/>
      {/* {
        isDragActive ?
          <p>Drop the files here ...</p> : <>
            <p>Drag 'n' drop some song files here</p>
          </>
      } */}
    </div>
  )
}

export default FileDrop