type Width = 'full' | 'half' | 'auto'

class Size {
  width: Width = 'auto'
  height: number

  constructor(width: Width, height: number) {
    this.width = width
    this.height = height
  }
}

export type CommonProps = {
  size?: Size
}
