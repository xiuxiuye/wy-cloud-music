import React from 'react'
import WCS from './assets/wonderfulComments'
import lastestComments from './assets/lastestComments'
import { Pagination } from 'antd'

export default function SongDetails() {
  return (
    <div className="wyy-music-song-comments">
      <div className="wyy-music-song-extras-title">
        <span>评论</span>
        <span>（已有159359条评论）</span>
      </div>
      <div className="wyy-music-song-mycomment">
        <div>
          <span className="iconfont icon-edit-square"></span>
          <span>发表评论</span>
        </div>
        <div>
          <span className="iconfont icon-smile"></span>
          <span className="iconfont icon-at"></span>
        </div>
      </div>
      <div className="wyy-music-song-wonderful-comments">
        <span className="wyy-music-song-extras-subtitle">精彩评论</span>
        {WCS.map((el, index) => <div key={index + 'wc'} className="wyy-music-song-comments-item">
          <img src={el.avatar} alt="" />
          <div className="wyy-music-song-comment">
            <div className="wyy-music-song-comment-content">
              <span>{el.reviewer}</span>
              <span>：{el.content}</span>
            </div>
            <div className="wyy-music-song-comment-subcontent">
              <span className="comment-time">{el.time}</span>
              <div>
                <span className="iconfont icon-zan"></span>
                <span>{el.likes}</span>
              </div>
              <span className="iconfont icon-share"></span>
              <span className="iconfont icon-pinglun"></span>
            </div>
          </div>
        </div>)}
        <div className="wyy-music-song-wonderful-comments-more">
          <span>更多精彩评论 &gt;</span>
        </div>
      </div>
      <div className="wyy-music-song-latest-comments">
        <span className="wyy-music-song-extras-subtitle">最新评论（159379）</span>
        {lastestComments.map((el, index) => <div key={index + 'lc'} className="wyy-music-song-comments-item">
          <img src={el.avatar} alt="" />
          <div className="wyy-music-song-comment">
            <div className="wyy-music-song-comment-content">
              <span>{el.reviewer}</span>
              <span>：{el.content}</span>
            </div>
            {el.to && <div className="wyy-music-song-comment-content wyy-music-song-comment-reply-content">
              <span>@{el.to.reviewer}</span>
              <span>：{el.to.content}</span>
            </div>}
            <div className="wyy-music-song-comment-subcontent">
              <span className="comment-time">{el.time}</span>
              <div>
                <span className="iconfont icon-zan"></span>
                <span>{el.likes}</span>
              </div>
              <span className="iconfont icon-share"></span>
              <span className="iconfont icon-pinglun"></span>
            </div>
          </div>
        </div>)}
        <div className="wyy-music-song-latest-comments-page">
          <Pagination defaultCurrent={1} total={159737} showSizeChanger={false} />
        </div>
      </div>
    </div>
  )
}
