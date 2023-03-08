/**
 *
 * View
 *
 */

import React, { useMemo } from 'react';
import {
    StyleSheet,
    View as RNView,
    ViewProps as RNViewProps,
} from 'react-native';

export interface ViewProps extends RNViewProps {
    testID?: string;
    borderColor?: string;
    backgroundColor?: string;
}

const View: React.FC<ViewProps> = function ({
    style,
    borderColor = 'transparent',
    backgroundColor = 'transparent',
    ...props
}) {

    const themeStyles = useMemo(() => {
        return StyleSheet.create({
            backgroundColor: '#fff',
            borderColor: '#fff',
        } as any);
    }, [backgroundColor, borderColor]);

    return <RNView style={[themeStyles, style]} {...props} />;
};

export default View;
