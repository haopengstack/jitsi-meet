import { StyleSheet } from 'react-native';

import { BoxModel, ColorPalette, createStyleSheet } from '../../base/styles';
import { FILMSTRIP_SIZE } from '../../filmstrip';

/**
 * Size for the Avatar.
 */
export const AVATAR_SIZE = 200;

export default createStyleSheet({

    /**
     * View that contains the indicators.
     */
    indicatorContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        margin: BoxModel.margin
    },

    /**
     * Indicator container for wide aspect ratio.
     */
    indicatorContainerWide: {
        marginRight: FILMSTRIP_SIZE + BoxModel.margin
    },

    labelWrapper: {
        flexDirection: 'column',
        position: 'absolute',
        right: 0,

        // Both on Android and iOS there is the status bar which may be visible.
        // On iPhone X there is the notch. In the two cases BoxModel.margin is
        // not enough.
        top: BoxModel.margin * 3
    },

    /**
     * Large video container style.
     */
    largeVideo: {
        ...StyleSheet.absoluteFillObject,
        alignItems: 'stretch',
        backgroundColor: ColorPalette.appBackground,
        flex: 1,
        justifyContent: 'center'
    }
});
