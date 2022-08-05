import React from "react";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faRobot } from "@fortawesome/free-solid-svg-icons";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

// Images
import user from "../images/ava.png";

const ChatBoxes = () => {
  return (
    <main className="chat-container">
      <div className="upper-container">
        <h2 className="chat-header">Chats With Bots</h2>
        <div className="additional-buttons">
          <FontAwesomeIcon className="robot-i" icon={faRobot}></FontAwesomeIcon>
          <FontAwesomeIcon
            className="userGroup-i"
            icon={faUserGroup}
          ></FontAwesomeIcon>
          <FontAwesomeIcon className="trash-i" icon={faTrash}></FontAwesomeIcon>
        </div>
      </div>
      <div className="messanger-box">
        <img className="user-png" src={user}></img>
        <div className="user-message">
          <div className="user-message-content">
            <div className="user-name-and-task">
              <div className="user-name">John The Robot</div>
              <div className="separator"></div>
              <p className="task">Math</p>
            </div>
            <div className="message">Hi! I can solve math problems...</div>
          </div>
        </div>
      </div>
      <div className="messanger-box">
        <img className="user-png" src={user}></img>
        <div className="user-message">
          <div className="user-message-content">
            <div className="user-name-and-task">
              <div className="user-name">John The Robot</div>
              <div className="separator"></div>
              <p className="task">Math</p>
            </div>
            <div className="message">Hi! I can solve math problems...</div>
          </div>
        </div>
      </div>
      <div className="messanger-box">
        <img className="user-png" src={user}></img>
        <div className="user-message">
          <div className="user-message-content">
            <div className="user-name-and-task">
              <div className="user-name">John The Robot</div>
              <div className="separator"></div>
              <p className="task">Math</p>
            </div>
            <div className="message">Hi! I can solve math problems...</div>
          </div>
        </div>
      </div>{" "}
      <div className="messanger-box">
        <img className="user-png" src={user}></img>
        <div className="user-message">
          <div className="user-message-content">
            <div className="user-name-and-task">
              <div className="user-name">John The Robot</div>
              <div className="separator"></div>
              <p className="task">Math</p>
            </div>
            <div className="message">Hi! I can solve math problems...</div>
          </div>
        </div>
      </div>{" "}
      <div className="messanger-box">
        <img className="user-png" src={user}></img>
        <div className="user-message">
          <div className="user-message-content">
            <div className="user-name-and-task">
              <div className="user-name">John The Robot</div>
              <div className="separator"></div>
              <p className="task">Math</p>
            </div>
            <div className="message">Hi! I can solve math problems...</div>
          </div>
        </div>
      </div>{" "}
      <div className="messanger-box">
        <img className="user-png" src={user}></img>
        <div className="user-message">
          <div className="user-message-content">
            <div className="user-name-and-task">
              <div className="user-name">John The Robot</div>
              <div className="separator"></div>
              <p className="task">Math</p>
            </div>
            <div className="message">Hi! I can solve math problems...</div>
          </div>
        </div>
      </div>{" "}
      <div className="messanger-box">
        <img className="user-png" src={user}></img>
        <div className="user-message">
          <div className="user-message-content">
            <div className="user-name-and-task">
              <div className="user-name">John The Robot</div>
              <div className="separator"></div>
              <p className="task">Math</p>
            </div>
            <div className="message">Hi! I can solve math problems...</div>
          </div>
        </div>
      </div>
      <div className="messanger-box">
        <img className="user-png" src={user}></img>
        <div className="user-message">
          <div className="user-message-content">
            <div className="user-name-and-task">
              <div className="user-name">John The Robot</div>
              <div className="separator"></div>
              <p className="task">Math</p>
            </div>
            <div className="message">Hi! I can solve math problems...</div>
          </div>
        </div>
      </div>
      <div className="messanger-box">
        <img className="user-png" src={user}></img>
        <div className="user-message">
          <div className="user-message-content">
            <div className="user-name-and-task">
              <div className="user-name">John The Robot</div>
              <div className="separator"></div>
              <p className="task">Math</p>
            </div>
            <div className="message">Hi! I can solve math problems...</div>
          </div>
        </div>
      </div>
      <div className="messanger-box">
        <img className="user-png" src={user}></img>
        <div className="user-message">
          <div className="user-message-content">
            <div className="user-name-and-task">
              <div className="user-name">John The Robot</div>
              <div className="separator"></div>
              <p className="task">Math</p>
            </div>
            <div className="message">Hi! I can solve math problems...</div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ChatBoxes;
