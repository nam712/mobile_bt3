import React from 'react';  
import { StatusBar } from 'expo-status-bar';  
import { StyleSheet, Text, View, FlatList } from 'react-native';  
import Icon from 'react-native-vector-icons/FontAwesome';  

const notifications = [  
  {  
    id: '1',  
    title: 'Bước 1 Xác định nhu cầu khách hàng',  
    message: 'Vũ Văn Hoàng sắp đến hạn lúc 01/08/2020 9:00',  
    date: '20/08/2020, 06:00',  
    icon: 'check-circle',  
    iconColor: '#4A90E2',  
    backgroundColor: '#f0f8ff', 
  },  
  {  
    id: '2',  
    title: 'Bạn có khách hàng mới!',  
    message: 'Chúc mừng bạn, bạn có khách hàng mới. Hãy mau chóng liên lạc ngay.',  
    date: '20/08/2020, 06:00',  
    icon: 'user-circle',  
    iconColor: '#4A90E2',  
    backgroundColor: '#FFFFFF', 
  },  
  {  
    id: '3',  
    title: 'Khách hàng được chia sẻ bị trùng',  
    message: 'Rất tiếc, khách hàng được chia sẻ đã tồn tại trên hệ thống. Vui lòng chia sẻ khách hàng.',  
    date: '20/08/2020, 06:00',  
    icon: 'user-circle',  
    iconColor: '#4A90E2',  
    backgroundColor: '#f0f8ff', 
  },  
  {  
    id: '4',  
    title: 'Khách hàng được thêm bị trùng',  
    message: 'Rất tiếc, khách hàng được thêm đã tồn tại trên hệ thống. Vui lòng thêm khách hàng khác.',  
    date: '20/08/2020, 06:00',  
    icon: 'user-circle',  
    iconColor: '#4A90E2',  
    backgroundColor: '#f0f8ff',  
  },  
  {  
    id: '5',  
    title: 'Công việc sắp đến hạn trong hôm nay',  
    message: 'Bạn có 17 công việc sắp đến hạn trong hôm nay.',  
    date: '20/08/2020, 06:00',  
    icon: 'check-circle',    
    iconColor: '#4A90E2',  
    backgroundColor: '#FFFFFF', 
  },  
  {  
    id: '6',  
    title: 'Công việc đã quá hạn',  
    message: 'Bạn có 17 công việc bị quá hạn. Hãy kiểm tra và lên kế hoạch hoàn thành công việc ngay.',  
    date: '20/08/2020, 06:00',  
    icon: 'check-circle',   
    iconColor: '#4A90E2',  
    backgroundColor: '#FFFFFF', 
  },  
];  

export default function App() {  
  const renderItem = ({ item }) => (  
    <View style={[styles.notificationItem, { backgroundColor: item.backgroundColor }]}>  
      <Icon name={item.icon} size={30} color={item.iconColor} style={styles.icon} />  
      <View style={styles.textContainer}>  
        <Text style={styles.title}>{item.title}</Text>  
        <Text style={styles.message}>{item.message}</Text>  
        <Text style={styles.date}>{item.date}</Text>  
      </View>  
    </View>  
  );  

  return (  
    <View style={styles.container}>  
      <Text style={styles.header}>Thông báo</Text>  
      <View style={styles.separator} />
      <FlatList  
        data={notifications}  
        renderItem={renderItem}  
        keyExtractor={(item) => item.id}  
        style={styles.list}  
      />  
      <StatusBar style="auto" />  
    </View>  
  );  
}
const styles = StyleSheet.create({  
  container: {  
    flex: 1,  
    backgroundColor: '#FFFFFF',  
    paddingTop: 40,  
  },  
  header: {  
    fontSize: 18,  
    fontWeight: 'bold',  
    textAlign: 'center',  
    marginBottom: 10,  
    color: '#333',  
  },  
  separator: {
    height: 1,
    backgroundColor: '#ccc',
    shadowColor: '#ccc',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  list: {  
    paddingHorizontal: 10,  
  },  
  notificationItem: {  
    flexDirection: 'row',  
    padding: 15,  
    marginVertical: 5,  
    borderRadius: 10,  
    elevation: 2,  
  },  
  icon: {  
    marginRight: 15,  
    alignSelf: 'center',  
  },  
  textContainer: {  
    flex: 1,  
  },  
  title: {  
    fontWeight: 'bold',  
    fontSize: 16,  
    marginBottom: 5,  
    color: '#333',  
  },  
  message: {  
    fontSize: 14,  
    color: '#555',  
  },  
  date: {  
    fontSize: 12,  
    color: '#999',  
    marginTop: 5,  
  },  
});