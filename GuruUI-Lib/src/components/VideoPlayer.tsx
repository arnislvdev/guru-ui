import * as React from 'react'
import { cn } from '../utils/cn'
import { Play, Pause, Volume2, VolumeX, Maximize, SkipBack, SkipForward } from 'lucide-react'

export type VideoPlayerProps = {
  src: string
  poster?: string
  width?: number | string
  height?: number | string
  controls?: boolean
  autoPlay?: boolean
  loop?: boolean
  muted?: boolean
  className?: string
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ 
  src, 
  poster, 
  width = '100%', 
  height = 'auto',
  controls = true,
  autoPlay = false,
  loop = false,
  muted = false,
  className = '' 
}) => {
  const videoRef = React.useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = React.useState(false)
  const [currentTime, setCurrentTime] = React.useState(0)
  const [duration, setDuration] = React.useState(0)
  const [volume, setVolume] = React.useState(1)
  const [isMuted, setIsMuted] = React.useState(muted)
  const [showControls, setShowControls] = React.useState(true)
  const [, setIsFullscreen] = React.useState(false)

  React.useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleTimeUpdate = () => setCurrentTime(video.currentTime)
    const handleLoadedMetadata = () => setDuration(video.duration)
    const handlePlay = () => setIsPlaying(true)
    const handlePause = () => setIsPlaying(false)
    const handleVolumeChange = () => {
      setVolume(video.volume)
      setIsMuted(video.muted)
    }

    video.addEventListener('timeupdate', handleTimeUpdate)
    video.addEventListener('loadedmetadata', handleLoadedMetadata)
    video.addEventListener('play', handlePlay)
    video.addEventListener('pause', handlePause)
    video.addEventListener('volumechange', handleVolumeChange)

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate)
      video.removeEventListener('loadedmetadata', handleLoadedMetadata)
      video.removeEventListener('play', handlePlay)
      video.removeEventListener('pause', handlePause)
      video.removeEventListener('volumechange', handleVolumeChange)
    }
  }, [])

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
    }
  }

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value)
    if (videoRef.current) {
      videoRef.current.currentTime = time
      setCurrentTime(time)
    }
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value)
    if (videoRef.current) {
      videoRef.current.volume = newVolume
      setVolume(newVolume)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      videoRef.current?.requestFullscreen()
      setIsFullscreen(true)
    } else {
      document.exitFullscreen()
      setIsFullscreen(false)
    }
  }

  const skip = (seconds: number) => {
    if (videoRef.current) {
      videoRef.current.currentTime = Math.max(0, Math.min(videoRef.current.currentTime + seconds, duration || 0))
    }
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  return (
    <div 
      className={cn('relative group', className)}
      style={{ width, height }}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        className="w-full h-full object-cover"
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        onClick={togglePlay}
      />
      
      {controls && (
        <div className={cn(
          'absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 transition-opacity duration-300',
          showControls ? 'opacity-100' : 'opacity-0'
        )}>
          {/* Progress Bar */}
          <div className="mb-3">
            <input
              type="range"
              min={0}
              max={duration || 0}
              value={currentTime}
              onChange={handleSeek}
              className="w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer slider"
              style={{
                background: `linear-gradient(to right, var(--arnis-accent, #ffffff) 0%, var(--arnis-accent, #ffffff) ${(currentTime / duration) * 100}%, rgba(255,255,255,0.2) ${(currentTime / duration) * 100}%, rgba(255,255,255,0.2) 100%)`
              }}
            />
          </div>
          
          {/* Controls */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button
                onClick={togglePlay}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
              </button>
              
              <button
                onClick={() => skip(-10)}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <SkipBack className="h-4 w-4" />
              </button>
              
              <button
                onClick={() => skip(10)}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <SkipForward className="h-4 w-4" />
              </button>
              
              <span className="text-sm text-white ml-2">
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2">
                <button
                  onClick={toggleMute}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                >
                  {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                </button>
                
                <input
                  type="range"
                  min={0}
                  max={1}
                  step={0.1}
                  value={volume}
                  onChange={handleVolumeChange}
                  className="w-16 h-1 bg-white/20 rounded-lg appearance-none cursor-pointer slider"
                  style={{
                    background: `linear-gradient(to right, var(--arnis-accent, #ffffff) 0%, var(--arnis-accent, #ffffff) ${volume * 100}%, rgba(255,255,255,0.2) ${volume * 100}%, rgba(255,255,255,0.2) 100%)`
                  }}
                />
              </div>
              
              <button
                onClick={toggleFullscreen}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <Maximize className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
      
      <style>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 12px;
          width: 12px;
          border-radius: 50%;
          background: var(--arnis-accent, #ffffff);
          cursor: pointer;
        }
        
        .slider::-moz-range-thumb {
          height: 12px;
          width: 12px;
          border-radius: 50%;
          background: var(--arnis-accent, #ffffff);
          cursor: pointer;
          border: none;
        }
      `}</style>
    </div>
  )
}

VideoPlayer.displayName = 'VideoPlayer'
