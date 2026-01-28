import { usePayment } from '../Context/payment';
import { mockBooks } from '../mocks/books';

import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default function BooksScreen() {
  const { hasBooksAccess, purchaseBooksAccess } = usePayment();
  const [selectedFormat, setSelectedFormat] = useState('ebook');
  console.log('hasBooksAccess:', hasBooksAccess);
  console.log('MockBooks:', mockBooks);
  const handlePurchase = () => {
    Alert.alert(
      'Purchase Books Access',
      'Get unlimited access to all ebooks and audiobooks for $9.99/month',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Purchase',
          onPress: async () => {
            await purchaseBooksAccess();
            Alert.alert('Success', 'You now have access to all books!');
          },
        },
      ]
    );
  };

  if (!hasBooksAccess) {
    return (
      <>

        <View style={styles.container}>
          <LinearGradient
            colors={['#8b5cf6', '#6d28d9']}
            style={styles.lockedContainer}
          >
            <View style={styles.lockIconContainer}>
              <Feather name="lock" size={24} color="#000" />
            </View>
            <Text style={styles.lockedTitle}>Premium Content</Text>
            <Text style={styles.lockedDescription}>
              Get unlimited access to thousands of ebooks and audiobooks
            </Text>
            <View style={styles.featuresContainer}>
              <View style={styles.feature}>
                   <Feather name="book-open" size={24} color="#000" />
                <Text style={styles.featureText}>Unlimited Ebooks</Text>
              </View>
              <View style={styles.feature}>
                <Feather name="headphones" size={24} color="#000" />
                <Text style={styles.featureText}>Unlimited Audiobooks</Text>
              </View>
              <View style={styles.feature}>
                   <Feather name="file-text" size={24} color="#000" />
                <Text style={styles.featureText}>Offline Reading</Text>
              </View>
            </View>
            <Pressable style={styles.purchaseButton} onPress={handlePurchase}>
              <Text style={styles.purchaseButtonText}>Get Access - $9.99/mo</Text>
            </Pressable>
          </LinearGradient>
        </View>
      </>
    );
  }

  return (
    <>
     
      <View style={styles.container}>
        <View style={styles.formatSelector}>
          <Pressable
            style={[
              styles.formatButton,
              selectedFormat === 'ebook' && styles.formatButtonActive,
            ]}
            onPress={() => setSelectedFormat('ebook')}
          >
            <Feather
              name="book-open"
              size={20}
              color={selectedFormat === 'ebook' ? '#fff' : '#64748b'}
            />
            <Text
              style={[
                styles.formatButtonText,
                selectedFormat === 'ebook' && styles.formatButtonTextActive,
              ]}
            >
              Ebooks
            </Text>
          </Pressable>
          <Pressable
            style={[
              styles.formatButton,
              selectedFormat === 'audiobook' && styles.formatButtonActive,
            ]}
            onPress={() => setSelectedFormat('audiobook')}
          >
            <Feather
              name="headphones"
              size={20}
              color={selectedFormat === 'audiobook' ? '#fff' : '#64748b'}
            />
            <Text
              style={[
                styles.formatButtonText,
                selectedFormat === 'audiobook' && styles.formatButtonTextActive,
              ]}
            >
              Audiobooks
            </Text>
          </Pressable>
        </View>

        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
        >
          {mockBooks
            .filter((book) => book.formats.includes(selectedFormat))
            .map((book) => (
              <Pressable
                key={book.id}
                style={styles.bookCard}
                onPress={() =>
                  Alert.alert(book.title, `By ${book.author}\n\n${book.description}`)
                }
              >
                <Image source={{ uri: book.cover }} style={styles.bookCover} />
                <View style={styles.bookInfo}>
                  <Text style={styles.bookTitle} numberOfLines={2}>
                    {book.title}
                  </Text>
                  <Text style={styles.bookAuthor} numberOfLines={1}>
                    {book.author}
                  </Text>
                  <View style={styles.bookMeta}>
                    {selectedFormat === 'audiobook' && book.duration && (
                      <View style={styles.metaItem}>
                       <Feather name="clock" size={24} color="#000" />
                        <Text style={styles.metaText}>{book.duration}</Text>
                      </View>
                    )}
                    {selectedFormat === 'ebook' && book.pages && (
                      <View style={styles.metaItem}>
                        <Feather name="file-text" size={24} color="#000" />
                        <Text style={styles.metaText}>{book.pages} pages</Text>
                      </View>
                    )}
                  </View>
                </View>
              </Pressable>
            ))}
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  lockedContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  lockIconContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  lockedTitle: {
    fontSize: 32,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 12,
  },
  lockedDescription: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.9)',
    textAlign: 'center',
    marginBottom: 32,
  },
  featuresContainer: {
    gap: 16,
    marginBottom: 32,
    width: '100%',
  },
  feature: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  featureText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '600',
  },
  purchaseButton: {
    backgroundColor: '#fff',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 12,
    width: '100%',
  },
  purchaseButtonText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#6d28d9',
    textAlign: 'center',
  },
  formatSelector: {
    flexDirection: 'row',
    padding: 16,
    gap: 12,
  },
  formatButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 12,
    borderRadius: 12,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#e2e8f0',
  },
  formatButtonActive: {
    backgroundColor: '#8b5cf6',
    borderColor: '#8b5cf6',
  },
  formatButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#64748b',
  },
  formatButtonTextActive: {
    color: '#fff',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
    gap: 16,
  },
  bookCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    gap: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  bookCover: {
    width: 80,
    height: 120,
    borderRadius: 8,
  },
  bookInfo: {
    flex: 1,
    justifyContent: 'space-between',
  },
  bookTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0f172a',
    marginBottom: 4,
  },
  bookAuthor: {
    fontSize: 14,
    color: '#64748b',
    marginBottom: 8,
  },
  bookMeta: {
    flexDirection: 'row',
    gap: 12,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  metaText: {
    fontSize: 12,
    color: '#64748b',
  },
});
