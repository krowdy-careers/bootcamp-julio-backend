import { VideoStatusProcess } from "../datalayers/models/mongodb/VideoReel.model"

class VideoController {
    async executeProcessToBuildReel() {
        const videoId: any = null

        try {
            // al iniciar proceso
            await this.setStatusOfVideo({
                videoId: videoId,
                status: VideoStatusProcess.INIT
            })
            // al finalizar proceso
            await this.setStatusOfVideo({
                videoId: videoId,
                status: VideoStatusProcess.END
            })
        } catch (error) {
            // al obtener error en el proceso
            await this.setStatusOfVideo({
                videoId: videoId,
                status: VideoStatusProcess.ERR
            })
            throw error
        }
    }
    async getStatusOfProcess({ }: any) {
        try {

        } catch (error) {
            throw error
        }
    }

    private async setStatusOfVideo({ }: any) {

    }

    private async createVideoReel() {

    }
}

export default new VideoController()