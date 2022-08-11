import { Response, } from 'restify';
import { Router, } from 'restify-router';
import videoController from '../controllers/video.controller';

const router = new Router();

router.get('/execute', async (req, res): Promise<Response> => {
  try {
    await videoController.executeProcessToBuildReel()
    return res.json({ success: true, });
  } catch (error) {
    return res.json({succes: false, error: error.stack})
  }
});

export default router;