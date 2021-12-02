import { memo } from "react"

type Props = {
    url?: string
    size: string
}

export const Avatar: React.FC<Props> = memo(({ url, size }) => {
    return (
        <div className={size}>
            <img src={url} alt='avatar' />
        </div>
    )
})