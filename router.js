import { Router } from 'express'
import Post from './Post.js'
import PostController from './PostController.js'

const router = new Router()

router.post('/letters', PostController.create)
router.get('/letters', PostController.getAll)
router.get('/letters/:id', PostController.getOne)
router.put('/letters', PostController.update)
router.delete('/letters/:id', PostController.delete)

export default router
