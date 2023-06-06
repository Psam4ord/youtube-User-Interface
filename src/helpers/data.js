import imageUrl from '../assets/logo-icon/youtube.png'


const user =
{
    userName: 'Kerry',
    Image: imageUrl,
    imageSize: 45
};

export const UserProfile = () => {
    return (
        <>
            <span className='flex  flex-col'>
                <img
                    src={user.imageUrl}
                    alt=''
                    style={{
                    width: user.imageSize,
                    height: user.imageSize
                    }}
                />

                <h1>{user.userName}</h1>
            </span>
        </>
    );
} 