import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Card, Text, View} from 'react-native-ui-lib';

const BlogDetailScreen = (props: any) => {
  let image =
    'https://images.pexels.com/photos/920382/pexels-photo-920382.jpeg';
  let description =
    'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available';
  let title = 'Blog 1';
  return (
    <View flex padding-10>
      <Text text50 marginV-20>
        {title}
      </Text>
      <Card marginT-20>
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
        <Text margin-10>{description}</Text>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({});

export default BlogDetailScreen;
