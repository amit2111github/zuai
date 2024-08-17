import { v4 as uuidv4 } from 'uuid';

export const fileProcessing = async (file, courseType, title, subject) => {
  const text = await convertToBase64(file);
  const data = {
    id: uuidv4(),
    pdf: text,
    title,
    subject,
    courseType,
    metadata: {
      size: file.size,
    },
  };
  let workspace = JSON.parse(localStorage.getItem('workspace'));
  if (!workspace) workspace = [];
  workspace.push(data);
  localStorage.setItem('workspace', JSON.stringify(workspace));
};

const convertToBase64 = async (file) => {
  const reader = new FileReader();
  const result = await new Promise((resolve, reject) => {
    reader.onloadend = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
  const base64String = result.replace('data:', '').replace(/^.+,/, '');
  return base64String;
};

export const convertBase64toUrl = (base64String) => {
  return base64String;
  // const byteCharacter = atob(base64String);
  // const byteNumber = new Array(byteCharacter.length);
  // for (let i = 0; i < byteCharacter.length; i++) {
  //   byteNumber[i] = byteCharacter.charCodeAt(i);
  // }
  // const byteArray = new Uint8Array(byteNumber);
  // // const res = new Uint8Array(byteNumber);
  // // for (let i = 0; i < byteCharacter.length; i++) {
  // //   res[i] = byteCharacter.charCodeAt(i);
  // // }
  // // return res.buffer;
  // // return base64String;
  // const blob = new Blob([byteArray], { type: 'application/pdf' });
  // const blobUrl = URL.createObjectURL(blob);
  // return blobUrl;
  // return by
};
