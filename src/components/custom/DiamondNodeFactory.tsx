import { DiamondNodeWidget } from './DiamondNodeWidget'
import { DiamondNodeModel } from './DiamondNodeModel'
import * as React from 'react'
import { AbstractReactFactory } from '@projectstorm/react-canvas-core'
import { DiagramEngine } from '@projectstorm/react-diagrams-core'

export class DiamondNodeFactory extends AbstractReactFactory<
  DiamondNodeModel,
  DiagramEngine
> {
  constructor () {
    super('diamond')
  }

  generateReactWidget (event: any): JSX.Element {
    return <DiamondNodeWidget engine={this.engine} node={event.model} />
  }

  generateModel (props: any) {
    return new DiamondNodeModel(props)
  }
}
