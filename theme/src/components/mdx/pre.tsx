import React from 'react'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import { LiveWrap, LiveEditWrap, LiveErrorWrap, LivePreviewWrap, LiveLabel, FileName } from '@styles/pre'

export default function Pre(props: any) {
  const [languageClass, filename] = (props.children.props ? props.children.props.className : '').split('!')
  const language = languageClass.split('-')[1]
  const liveEdit = language === '.jsx'
  return (
    <LiveWrap className="pre">
      {filename ? <FileName className="filename">{filename}</FileName> : null}
      <LiveProvider code={props.children.props.children.trim()} language={liveEdit ? 'jsx' : language} disabled={!liveEdit}>
        <LiveEditWrap withFilename={!!filename} liveEdit={liveEdit}>
          {liveEdit ? <LiveLabel>Edit</LiveLabel> : null}
          <LiveEditor />
        </LiveEditWrap>
        {liveEdit ? (
          <>
            <LiveErrorWrap>
              <LiveError />
            </LiveErrorWrap>
            <LivePreviewWrap>
              <LivePreview />
            </LivePreviewWrap>
          </>
        ) : null}
      </LiveProvider>
    </LiveWrap>
  )
}
