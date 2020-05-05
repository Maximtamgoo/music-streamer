import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import './style/FileDrop.css'
// import { getMetaData } from '../music-metadata-browser'

const FileDrop = () => {
  const onDrop = useCallback(async acceptedFiles => {
    if (acceptedFiles.length === 0 || acceptedFiles.length > 20) return
    console.log('acceptedFiles:', acceptedFiles)

    // const promises = req.files.map(file => {
    //   uploadFile()
    // })

    const formData = new FormData()
    formData.append('song', acceptedFiles[0])

    try {
      const res = await fetch('/api/upload/single', {
        method: 'POST',
        body: formData
      })
      const data = await res.text()
      console.log('data:', data)
    } catch (error) {
      console.log('error:', error)
    }

    // for (const file of acceptedFiles) {
    //   let metadata = await getMetaData(file)
    //   console.log(metadata)
    // }
    // return

    // const formData = new FormData()
    // acceptedFiles.forEach(file => {
    //   formData.append('songs', file)
    // })

    // try {
    //   const res = await fetch('/api/upload', {
    //     method: 'POST',
    //     body: formData
    //   })
    //   const data = await res.text()
    //   console.log('data:', data)
    // } catch (error) {
    //   console.log('error:', error)
    // }
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  return (
    <div className="file-drop" {...getRootProps()}>
      <input {...getInputProps()} />
      {
        isDragActive ?
          <p>Drop the files here ...</p> :
          <p>Drag 'n' drop some song files here, or click to select those files Here is some more text</p>
      }
    </div>
  )
}

export default FileDrop