import {useNavigation} from '@react-navigation/native';
import React, {Component, useState} from 'react';
import {StyleSheet, FlatList} from 'react-native';
import {Card, View, Text} from 'react-native-ui-lib';

const BlogScreen = () => {
  const navigation = useNavigation();

  const [blogs, setBlogs] = useState([
    {
      id: '1',
      title: 'Blog 1',
      image: 'https://images.pexels.com/photos/920382/pexels-photo-920382.jpeg',
      excerption:
        'In publishing and graphic design, Lorem ipsum is a placeholder In publishing and graphic design, Lorem ipsum is a placeholder ...',
      description:
        'In publishing and graphic design, Lorem ipsum is a placeholder texxt commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available',
    },
    {
      id: '2',
      title: 'Blog 2',
      image: 'https://images.pexels.com/photos/920382/pexels-photo-920382.jpeg',
      excerption:
        'In publishing and graphic design, Lorem ipsum is a placeholder In publishing and graphic design, Lorem ipsum is a placeholder ...',
      description:
        'In publishing and graphic design, Lorem ipsum is a placeholder texxt commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available',
    },
    {
      id: '3',
      title: 'Blog 3',
      image: 'https://images.pexels.com/photos/920382/pexels-photo-920382.jpeg',
      excerption:
        'In publishing and graphic design, Lorem ipsum is a placeholder In publishing and graphic design, Lorem ipsum is a placeholder ...',
      description:
        'In publishing and graphic design, Lorem ipsum is a placeholder texxt commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available',
    },
  ]);

  type ItemProps = {
    title: string;
    description?: string;
    image: string;
    excerption: string;
  };

  const Item = ({title, image, excerption}: ItemProps) => (
    <Card onPress={() => navigation.navigate('BlogDetail' as never)} marginT-20>
      <Card.Image
        source={{
          uri: image,
        }}
        width={100}
        height={100}
      />
      <Text margin-10 text50>
        {title}
      </Text>
      <Text margin-10>{excerption}</Text>
    </Card>
  );

  return (
    <View padding-20>
      <Text text50 marginV-20>
        Blogs
      </Text>

      <FlatList
        data={blogs}
        renderItem={({item}) => (
          <Item
            title={item.title}
            excerption={item.excerption}
            image={item.image}
          />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default BlogScreen;
