export const checkImage = (image: File) => {
    const types = ['image/png', 'image/jpeg']
    let err = ''

    if (image.size > 1024 * 1024) err = 'This img > 1mb size'
    if (!types.includes(image.type)) err = 'Type must be png/jpeg'

    return err
}

export const imageUpload = async (image: File) => {
    const formData = new FormData()

    formData.append('image', image)
    formData.append('upload_preset', 'ml_default')
    formData.append('cloud_name', 'siemens2021')

    const res = await (await fetch('https://api.cloudinary.com/v1_1/siemens2021/image/upload', {
        method: 'POST',
        body: formData
    })).json()

    return {
        public_id: res.public_id,
        url: res.secure_url
    }
}