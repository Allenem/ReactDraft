import React, { PureComponent } from 'react';
import { DownloadAppWrapper, DownloadAppInfo } from '../style'

class DownloadApp extends PureComponent {
  render() {
    return (
      <DownloadAppWrapper>
        <img className='qrCode' src='https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png' alt='' />
        <DownloadAppInfo>
          <h4 className='title'>下载简书手机App   ></h4>
          <p className='des'>随时随地发现和创作内容</p>
        </DownloadAppInfo>
        
      </DownloadAppWrapper>
    )
  }
}

export default DownloadApp;