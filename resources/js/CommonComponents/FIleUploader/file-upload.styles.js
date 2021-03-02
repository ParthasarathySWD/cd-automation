import styled from "styled-components";

export const FileUploadContainer = styled.section `
  position: relative;
  margin: 25px 0 15px;
  border: 2px dotted lightgray;
  padding: 15px 20px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
`;

export const FormField = styled.input `
  font-size: 18px;
  display: block;
  width: 100%;
  border: none;
  text-transform: none;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  &:focus {
    outline: none;
  }
`;

export const InputLabel = styled.label `
  top: -21px;
  font-size: 13px;
  color: black;
  left: 0;
  position: absolute;
`;

export const DragDropText = styled.p `
  font-weight: bold;
  letter-spacing: 2.2px;
  margin-top: 0;
  text-align: center;
`;

export const UploadFileBtn = styled.button `
box-sizing: border-box;
-webkit-appearance: none;
-moz-appearance: none;
appearance: none;
background-color: transparent;
border: 2px solid #6c757d85;
cursor: pointer;
font-size: 11px;
line-height: 1;
padding: 10px 30px;
text-align: center;
text-transform: uppercase;
font-weight: 700;
border-radius: 6px;
color: #495057;
position: relative;
top:5px;
overflow: hidden;
z-index: 1;
-webkit-transition: color 250ms ease-in-out;
transition: color 250ms ease-in-out;
font-family: "Open Sans",sans-serif;
width: 100%;
display: -webkit-box;
display: -webkit-flex;
display: -ms-flexbox;
display: flex;
-webkit-align-items: center;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
padding-right: 0;
-webkit-box-pack: center;
-webkit-justify-content: center;
-ms-flex-pack: center;
justify-content: center;
  &:after {
    content: "";
    position: absolute;
    display: block;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 100%;
    background: #2f2f2f;
    z-index: -1;
    transition: width 250ms ease-in-out;
  }
  i {
    font-size: 22px;
    margin-right: 5px;
    border-right: 2px solid;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  @media only screen and (max-width: 500px) {
    width: 70%;
  }
  @media only screen and (max-width: 350px) {
    width: 100%;
  }
  &:hover {
    color: #fff;
    outline: 0;
    background: transparent;
    &:after {
      width: 110%;
    }
  }
  &:focus {
    outline: 0;
    background: transparent;
  }
  &:disabled {
    opacity: 0.4;
    filter: grayscale(100%);
    pointer-events: none;
  }
`;

export const FilePreviewContainer = styled.article `
  margin-bottom: 0px;
  span {
    font-size: 14px;
  }
`;

export const PreviewList = styled.section `
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  @media only screen and (max-width: 400px) {
    flex-direction: column;
  }
`;

export const FileMetaData = styled.div `
  display: ${(props) => (props.isImageFile ? "none" : "flex")};
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 0px;
  border-radius: 6px;
  color: #0080807a;
  font-weight: bold;
  background-color: #fffff;
  aside {
    margin-top: auto;
    display: flex;
    justify-content: space-between;
  }
`;

export const RemoveFileIcon = styled.i `
  cursor: pointer;
  &:hover {
    transform: scale(1.3);
  }
`;

export const PreviewContainer = styled.section `
  padding: 0.25rem;
  width: 100%;
  height: 60px;
  border-radius: 6px;
  box-sizing: border-box;
  &:hover {
    opacity: 0.55;
    ${FileMetaData} {
      display: flex;
    }
  }
  & > div:first-of-type {
    height: 100%;
    position: relative;
  }
  @media only screen and (max-width: 750px) {
    width: 25%;
  }
  @media only screen and (max-width: 500px) {
    width: 50%;
  }
  @media only screen and (max-width: 400px) {
    width: 100%;
    padding: 0 0 0.4em;
  }
`;

export const ImagePreview = styled.img `
  border-radius: 6px;
  width: 100%;
  height: 100%;
`;