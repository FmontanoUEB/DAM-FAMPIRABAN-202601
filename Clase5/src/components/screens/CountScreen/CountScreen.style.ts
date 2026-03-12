import { StyleSheet } from "react-native";
import { space } from "../../../themes/space";
import { colors } from "../../../themes/colors";
export const stylesCountScreen = StyleSheet.create({
    labelText: {
        color: colors.red,
        fontSize: space.xl,
        width: 70,
        height: 70,
        margin: 4,
        borderWidth: 1,
        borderColor: colors.black,
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    button: {
        backgroundColor: colors.black,
        fontSize: space.xl,
        padding: space.xl,
        margin: space.xl
    }
});