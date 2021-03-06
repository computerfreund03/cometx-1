import { FiMessageCircle } from 'react-icons/fi'
import React from 'react'
import { useCurrentUser } from '@/lib/queries/useCurrentUser'
import CreateCommentModal from '@/components/comment/create/CreateCommentModal'
import { useLoginStore } from '@/lib/stores/useLoginStore'
import { useCommentStore } from '@/lib/stores/useCommentStore'

export default function CreateCommentButton({
  post,
  parentComment,
  setParentComment,
  commentVariables
}) {
  const currentUser = useCurrentUser().data
  const { setLogin } = useLoginStore()
  const { setCreateComment } = useCommentStore()

  return (
    <>
      <CreateCommentModal
        commentVariables={commentVariables}
        post={post}
        parentComment={parentComment}
      />

      <div className="fixed z-50 bottom-20 md:bottom-8 left-0 md:left-64 right-0 mycontainer grid grid-cols-3 pointer-events-none">
        <div className="col-span-3 md:col-span-2 flex">
          <div
            onClick={() => {
              if (currentUser) {
                setParentComment(null)
                setCreateComment(true)
              } else {
                setLogin(true)
              }
            }}
            className="pointer-events-auto text-white opacity-90 hover:opacity-100 rounded-full shadow-md bg-blue-600 mx-auto h-8 w-48 flex items-center justify-center label cursor-pointer transition transform hover:scale-105"
          >
            New Comment
            <FiMessageCircle size={16} className="ml-3" />
          </div>
        </div>
      </div>
    </>
  )
}
