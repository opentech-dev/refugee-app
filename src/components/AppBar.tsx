import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useContext, useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Appbar, IconButton, Menu } from 'react-native-paper';

import { appStyles } from '../appStyles';
import { languageItems } from '../language-items';
import { RootStackParamList } from '../navigator/types';
import { LanguageContext } from '../providers/LanguageContext';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const AppBar = ({
  showBackButton = false,
  title,
  showLanguagePicker,
  showMenuButton,
}: {
  showBackButton?: boolean;
  showLanguagePicker?: boolean;
  showMenuButton?: boolean;
  title: string;
}) => {
  const navigation = useNavigation<NavigationProp>();
  const { language } = useContext(LanguageContext);
  const isArabic = language === 'arabic';

  const activeLanguageItem = languageItems.find(
    (item) => item.value === language,
  );
  const [visible, setVisible] = useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  return (
    <Appbar.Header
      style={{
        ...styles.appBar,
        flexDirection: isArabic ? 'row-reverse' : 'row',
      }}
    >
      {showBackButton && (
        <IconButton
          icon={isArabic ? 'arrow-right' : 'arrow-left'}
          iconColor="white"
          onPress={() => navigation.goBack()}
        />
      )}
      <Appbar.Content
        titleStyle={{
          ...styles.title,
          flexGrow: !isArabic ? 1 : undefined,
          marginLeft: !showBackButton && !isArabic ? 16 : 0,
          marginRight: !showBackButton && isArabic ? 16 : 0,
        }}
        style={{
          display: 'flex',
          flexDirection: isArabic ? 'row-reverse' : 'row',
        }}
        title={title}
      />
      <View
        style={{
          ...styles.menuIcons,
          flexDirection: isArabic ? 'row-reverse' : 'row',
        }}
      >
        {showLanguagePicker && activeLanguageItem && (
          <TouchableOpacity
            onPress={() => navigation.navigate('ChooseLanguage')}
          >
            <View style={styles.languageIconWrapper}>
              {activeLanguageItem.icon}
            </View>
          </TouchableOpacity>
        )}
        {showMenuButton && (
          <Menu
            visible={visible}
            onDismiss={closeMenu}
            anchorPosition="bottom"
            contentStyle={{ backgroundColor: 'white' }}
            anchor={
              <Appbar.Action
                iconColor="white"
                icon="dots-vertical"
                onPress={openMenu}
              />
            }
          >
            <Menu.Item
              style={{ height: 30 }}
              titleStyle={{ fontSize: 16, color: appStyles.default }}
              onPress={() => {
                navigation.navigate('About');
                closeMenu();
              }}
              title={
                languageItems.find((item) => item.value === language)
                  ?.aboutTitle ?? 'About'
              }
            />
          </Menu>
        )}
      </View>
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  appBar: {
    backgroundColor: appStyles.primary,
    display: 'flex',
    alignItems: 'center',
  },
  title: {
    color: 'white',
  },
  menuIcons: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
  },
  languageIconWrapper: {
    borderRadius: 8,
    overflow: 'hidden',
  },
});
export default AppBar;
