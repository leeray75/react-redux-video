import MedscapeConfig from 'app/config';
const imageServer = MedscapeConfig.imageServer;
const AmpConfig = {
      debug: true,
      autoplay: false,
      playsinline: true,
      mode: 'html',
      muted: true,
      media: {
        autoplay: false,
        mode: 'html'
      },
      controls: {
        mode: 'auto'
      },
      hls: {
        resources: [],
        quality: {
          startLevel: 0
        },
        data: {
          enableWorker: true,
          enableSoftwareAES: true,
          debug: false
        }
      },
      captioning: {
        enabled: true
      }
      
    }

export default AmpConfig;
  