/////////////////////////////////////////////////////////////////////
// Autodesk.ADN.Viewing.Extension.Markup
// by Philippe Leefsma, Feb 2016
//
/////////////////////////////////////////////////////////////////////
import Markup2DPanel from './Viewing.Extension.Markup2D.Panel'
import ExtensionBase from 'Viewer.ExtensionBase'
import ViewerToolkit from 'Viewer.Toolkit'
import './Viewing.Extension.Markup2D.css'
import './MarkupsCore.js'
import './spectrum.css'
import './spectrum'

class Markup2DExtension extends ExtensionBase {

  /////////////////////////////////////////////////////////////////
  // Class constructor
  //
  /////////////////////////////////////////////////////////////////
  constructor (viewer, options) {

    super(viewer, options)
  }

  /////////////////////////////////////////////////////////////////
  // Extension Id
  //
  /////////////////////////////////////////////////////////////////
  static get ExtensionId () {

    return 'Viewing.Extension.Markup2D'
  }

  /////////////////////////////////////////////////////////////////
  // Load callback
  //
  /////////////////////////////////////////////////////////////////
  load () {


    if(LMV_VIEWER_VERSION.slice(0,1)<=6)this.onToolbarCreated()

    console.log('Viewing.Extension.Markup2D loaded')

    return true
  }

  onToolbarCreated(){
    this._control = ViewerToolkit.createButton(
      'toolbar-markup2D',
      'glyphicon glyphicon-edit',
      'Markup 2D Panel', () => {

        this._panel.toggleVisibility()
      })

    this._panel = new Markup2DPanel(
      this._viewer,
      'markup2d',
      this._control.container)

    this.parentControl = this._options.parentControl

    if (!this.parentControl) {

      var viewerToolbar = this._viewer.getToolbar(true)

      this.parentControl = new Autodesk.Viewing.UI.ControlGroup(
        'markup')

      viewerToolbar.addControl(this.parentControl)
    }

    this.parentControl.addControl(
      this._control)

    this._panel.setVisible(
      this._options.showPanel)
  }
  /////////////////////////////////////////////////////////////////
  // Unload callback
  //
  /////////////////////////////////////////////////////////////////
  unload () {

    this.parentControl.removeControl(
      this._control)

    console.log('Viewing.Extension.Markup2D unloaded')
  }
}

Autodesk.Viewing.theExtensionManager.registerExtension(
  Markup2DExtension.ExtensionId,
  Markup2DExtension)
