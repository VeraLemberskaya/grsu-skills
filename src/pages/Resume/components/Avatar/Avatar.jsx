import React from "react";
import "./index.css";

import Icon from "../Icon";
import { Edit, Photo } from "../../../../assets/icons";

const Avatar = ({ img }) => {
  const [selectedFile, setSelectedFile] = React.useState(null);
  const [preview, setPreview] = React.useState(null);

  React.useEffect(() => {
    const objectUrl = selectedFile && URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  return (
    <>
      <input
        style={{ display: "none" }}
        id="avatar-input"
        type="file"
        value=""
        accept=" image/*"
        onChange={handleFileChange}
      />
      <label htmlFor="avatar-input" className="avatar-box">
        <img className="avatar" src={preview ? preview : img} alt="avatar" />
        <Icon className="hover-img">
          <Photo />
        </Icon>
        <img className="hover-img" src={Photo} />
        <div className="edit-icon">
          <Icon>
            <Edit />
          </Icon>
        </div>
      </label>
    </>
  );
};

export default Avatar;
