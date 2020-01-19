import { Trans } from "@lingui/macro"
import React from "react"
import { Button, ButtonType } from "../UI"

interface IAuthChangedLoggedInAlertProps {
  username: string
  reload: () => void
}

const AuthChangedLoggedInAlert: React.FC<IAuthChangedLoggedInAlertProps> = ({
  username,
  reload,
}) => (
  <div className="auth-alert auth-alert-logged-in">
    <div className="alert alert-info">
      <div className="container-fluid">
        <p>
          <Trans id="auth_alert.logged_in.title">
            You have been logged in, <strong>{username}</strong>.
          </Trans>
        </p>
        <p>
          <Button
            text={
              <Trans id="auth_alert.logged_in.cta">
                This page was displayed before you've logged in and is no
                longer accurate. Click this message to update page contents.
              </Trans>
            }
            type={ButtonType.LINK}
            onClick={reload}
          />
        </p>
      </div>
    </div>
  </div>
)

export default AuthChangedLoggedInAlert
