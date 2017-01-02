from bs4 import BeautifulSoup
import bs4
import re
url ='http://forums.hardwarezone.com.sg/eat-drink-man-woman-16/%5Bofficial%5D-chit-chat-students-part-2-a-5526993-57.html'
import urllib2
req = urllib2.Request(url)
req.add_header('Cache-Control', 'max-age=0')
resp = urllib2.urlopen(req)
content = resp.read()

soup = BeautifulSoup(content, "lxml")
link = soup.find_all("a", {"title" : re.compile('^Next.*')}, href = True) #{"title" : "/^Next Page - .*"},
# for a in link:
# 	print a['href']
#exit(0)
tbl = soup.find_all("a", {"class":"bigusername"})
# print tbl
# for name in tbl:
# 	for username in name.children:
# 		print username
# exit(0)

letters = soup.find_all("div", attrs={"id":re.compile("post_message_\d+")})
for letter in letters:
	print '---new post---'
	for each in letter:
		if isinstance(each, bs4.element.NavigableString):
			if not repr(each) == u'\n':
				print 'post', each
			continue
		for child in each.children:
			if isinstance(child, bs4.element.NavigableString):
				continue
				#print repr(child)
			if isinstance(child, bs4.element.Tag):
				try:
					for each_child in child:
						if isinstance(each_child, bs4.element.NavigableString):
							print 'each_child', repr(each_child)
						if isinstance(each_child, bs4.element.Tag):
							for children_child in each_child:
								if isinstance(children_child, bs4.element.NavigableString):
									print 'children_child', children_child
				except:
					pass
				#print 'except', child
		#print type(child)
		# if '<' not in yes:
		# 	print yes
