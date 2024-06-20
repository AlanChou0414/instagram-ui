import { DATE } from "@/assets/data/post"
import { faBookmark, faComment, faHeart, faPaperPlane } from "@fortawesome/free-regular-svg-icons"
import { faCircleUser, faEllipsis } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native"
import tw from "tailwind-react-native-classnames"

export const Post = ({ info }: {
  info: PostInfo
}) => {
  return (
    <View style={tw`flex flex-col pb-10`}>
      <View style={tw`flex flex-row justify-between items-center px-3 pb-2`}>
        <View style={tw`flex flex-row items-center`}>
          <FontAwesomeIcon icon={faCircleUser} size={30} />
          <Text style={tw`px-2`}>{info.Account}</Text>
        </View>
        <TouchableOpacity style={tw`px-1`}>
          <FontAwesomeIcon icon={faEllipsis} size={20} />
        </TouchableOpacity>
      </View>
      <Image source={{ uri: info.Photo }} height={400} />
      <View style={tw`flex flex-row justify-between px-2 pt-3`}>
        <View style={tw`flex flex-row`}>
          <TouchableOpacity style={tw`px-2`}>
            <FontAwesomeIcon icon={faHeart} size={24} />
          </TouchableOpacity>
          <TouchableOpacity style={tw`px-2`}>
            <FontAwesomeIcon icon={faComment} size={24} />
          </TouchableOpacity>
          <TouchableOpacity style={tw`px-2`}>
            <FontAwesomeIcon icon={faPaperPlane} size={24} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={tw`px-2`}>
          <FontAwesomeIcon icon={faBookmark} size={24} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export const PostList = () => {
  return (
    <FlatList
      data={DATE}
      renderItem={({ item }) => <Post info={item} />}
      keyExtractor={item => item.Id}
    />
  )
}