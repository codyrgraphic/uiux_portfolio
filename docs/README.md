# UIUX Portfolio

A portfolio website for Cody Roberts specialising in User Interface and User Experience design.

## Steps to Update NARAI 2

Follow these steps to update NARAI to a new version.

### Update Version

- Open [version.txt](version.txt) and modify the `version` field.
  ```txt
  "version": "x.x.x"
  ```

### Stage Changes

- Stage your changes using Git.
  <br>
  `  git add .`

### Commit Changes

- Commit your changes to Git with an appropriate message.
  <br>
  `  git commit -m "Message about each change"`

### Tag the Commit

- Tag the commit with the new version number.
  <br>
  `  git tag -a vx.x.x -m "Message about the updates broadly"`

### Push Changes

- Push your changes, along with the tag, to GitHub.
  <br>
  `  git push origin main --tags`

<br><br>
