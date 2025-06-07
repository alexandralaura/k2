import React, { useState} from 'react';
import Skeleton from 'react-loading-skeleton';
import {
    TiArrowUpOutline,
    TiArrowUpThick,
    TiArrowDownOutline,
    TiArrowDownThick,
    TiMessage,
} from 'react-icons/ti';
import { Card } from '../Card/Card';
import { shortenNumber } from '../utils/shortenNumber';
import styles from './Post.module.css';



export function Post(props)  {

   const [voteValue, setVoteValue] = useState(0);

   const { post } = props;

   const onHandleVote = (newValue) => {
    if (newValue === voteValue) {
      setVoteValue(0);
    } else if (newValue === 1) {
      setVoteValue(1);
    } else {
      setVoteValue(-1);
    }
  };

  const renderUpVote = () => {
    if (voteValue === 1) {
      return <TiArrowUpThick className="icon-action" />;
    }
    return <TiArrowUpOutline className="icon-action" />;
  };

  const renderDownVote = () => {
    if (voteValue === -1) {
      return <TiArrowDownThick className="icon-action" />;
    }
    return <TiArrowDownOutline className="icon-action" />;
  };

  const getVoteType = () => {
    if (voteValue === 1) {
      return 'up-vote';
    }
    if (voteValue === -1) {
      return 'down-vote';
    }

    return '';
  };

  return (
    <article key={post.id}>
      <Card>
        <div className={styles["post-wrapper"]}>
          <div className={styles["post-votes-container"]}>
            <button
              type="button"
              className={`${styles['icon-action-button']} ${styles['up-vote']} ${
                voteValue === 1 ? styles.active : '' }`}
              
              onClick={() => onHandleVote(1)}
              aria-label="Up vote"
            >
              {renderUpVote()}
            </button>
            <p className={`${styles['post-votes-value']} ${styles[getVoteType()]}`}>
              {shortenNumber(post.ups, 1)}
            </p>
            <button
              type="button"
              className={`${styles['icon-action-button']} ${styles['down-vote']} ${
                voteValue === -1 ? styles.active : '' }`
              }
              onClick={() => onHandleVote(-1)}
              aria-label="Down vote"
            >
              {renderDownVote()}
            </button>
          </div>
          <div className={styles["post-container"]}>
            <h3 className={styles["post-title"]}>{post.title}</h3>

            <div className={styles["post-image-container"]}>
              <img src={post.url} alt="" className={styles["post-image"]} />
            </div>

            <div className={styles["post-details"]}>
              <span className={styles["author-details"]}>
                
                <span className={styles["author-username"]}>{post.author}</span>
              </span>
              <span></span>
              <span className={styles["post-comments-container"]}>
                <button
                  type="button" 
                  
                  className={`${styles['icon-action-button']} ${post.showingComments ? styles['showing-comments'] : ''}`}

                  
                  aria-label="Show comments"
                >
                  <TiMessage className="icon-action" />
                </button>
                {shortenNumber(post.num_comments, 1)}
              </span>
            </div>

          
          </div>
        </div>
      </Card>
    </article>
  );
};

export default Post;

