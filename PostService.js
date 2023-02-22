import Post from "./Post.js"
import fileService from "./fileService.js"

class PostService {
//сервис работает только с базой данных; от req res не зависим

    async create(post, files) {
        const pictureLetter = fileService.savePictureLetter(files.pictureLetter) // записываем на диск и сохраняем имя в бд
        const voiceLetter = fileService.saveVoiceLetter(files.voiceLetter) 
        const picture1 = fileService.savePicture1(files.picture1) 
        const voice1 = fileService.saveVoice1(files.voice1) 
        const picture2 = fileService.savePicture2(files.picture2) 
        const voice2 = fileService.saveVoice2(files.voice2) 
        const picture3 = fileService.savePicture3(files.picture3) 
        const voice3 = fileService.saveVoice3(files.voice3) 

        const createPost = await Post.create({ ...post, pictureLetter, voiceLetter, picture1, voice1, picture2, voice2, picture3, voice3 })
        return  createPost
    }

    async getAll() {
        const posts = await Post.find()
        return posts
       
    }

    async getOne(id) {
        if (!id) {
            throw new Error('не указан Id')
        }
        const post = await Post.findById(id)
        return post
    }

    async update(post) {
        if (!post._id) {
            throw new Error('не указан Id')
        }
        const updatedPost = await Post.findByIdAndUpdate(post._id, post, {new: true})                 //{new: true} чтобы вернулся обновленный пост
        return updatedPost
       
    }

    async delete(id) {
        if (!id) {
            throw new Error('не указан Id')
        }
        const post = await Post.findByIdAndDelete(id)
        return post
    }
}

export default new PostService()