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
overall_lst = []
letters = soup.find_all("div", attrs={"id":re.compile("post_message_\d+")})
prev_username = ''
#for username in tbl:
#letters = [letters[3]]
for letter in letters:
	print '---new post---'
	msg = ''
	qmsg_lst = []
	q_user = ''
	q_msg = ''
	for each in letter:
		#import pdb;pdb.set_trace()
		if isinstance(each, bs4.element.NavigableString):
			if not repr(each) == u'\n' and each.strip():
				msg += each 
				
		elif isinstance(each, bs4.element.Tag):
			for child in each.children:
				if isinstance(child, bs4.element.NavigableString):
					continue				
				if isinstance(child, bs4.element.Tag):
					try:
						for each_child in child:
							print each_child
							if isinstance(each_child, bs4.element.NavigableString):
								q_msg = each_child
								if q_user:
									qmsg_lst.append((q_user, q_msg))
							if isinstance(each_child, bs4.element.Tag):
								for children_child in each_child:
									if isinstance(children_child, bs4.element.NavigableString):
										q_user = children_child
					except:
						pass
			
	overall_lst.append({msg : qmsg_lst})
#	prev_username = username
for i in overall_lst:
	print i
	print 'new line'