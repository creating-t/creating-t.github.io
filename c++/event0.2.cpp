#include <iostream>
#include <string>

struct EDATA{};
typedef bool (*EL)(const EDATA &);
typedef EL eventListener;
typedef const EDATA & ED;
typedef const char* EN;

class tasks
{
private:
public:
	tasks(eventListener callback);  // tasks(bool (*callback)(const EDATA &));
	~tasks();
	EL el;
	tasks* next;
	tasks* Next(tasks* next);
};
tasks::tasks(eventListener callback)
{
	el = callback;
	next = NULL;
}
tasks* tasks::Next(tasks* next)
{
	this->next = next;
	return next;
}
tasks::~tasks()
{
	next = NULL;
}

class EVENT
{
private:
	tasks* head;
public:
	EVENT(EN eventName);
	~EVENT();
	EN eventName;
	void emit();
	bool add(EL el);
	bool remove(EL el);
};
EVENT::EVENT(EN eventName)
{
	this->eventName = eventName;
	head = NULL;
}
EVENT::~EVENT()
{
	tasks* p = head;
	tasks* q;
	while(NULL != p){
		q = p->next;
		delete p;
		p = q;
	}
}
bool EVENT::add(eventListener el)
{
	tasks* p = head;
	if(NULL == head){
		head = new tasks(el);
		return true;
	}
	while (NULL != p->next)
	{
		if(p->el == el) return false;
		p = p->next;
	}
	if(p->el == el) return false;
	p->next = new tasks(el);
	return true;
}

bool EVENT::remove(eventListener el){
	if(NULL == head) return false;
	tasks* p = head->next;
	if(head->el == el) {
		delete head;
		head = p;
		return true;
	}
	tasks* q = head;
	while (NULL != p)
	{
		if(p->el == el){
			q->next = p->next;
			delete p;
			return true;
		}
		q = p;
		p = p->next;
	}
	return false;
}

void EVENT::emit()
{
	// TODO
	tasks* p = head;
	EDATA e = {};
	// bool block = true;
	while (NULL != p /*&& block*/)
	{
		/*block = */p->el(e);
		p = p->next;
	}
}

class evs
{
private:
	EVENT * ev;
	evs* next;
public:
	evs(EN eventName);
	~evs();
	evs* Next();
	evs* Next(evs* next);
	EVENT* event();
};

evs::evs(EN eventName){
	ev = new EVENT(eventName);
	next = NULL;
}
evs::~evs(){
	delete ev;
	ev = NULL;
	next = NULL;
}

EVENT* evs::event()
{
	return ev;
}

evs* evs::Next()
{
	return next;
}

evs* evs::Next(evs* next)
{
	this->next = next;
	return next;
}

class EVENTOBJECT
{
private:
	evs* head;
	EVENT * getEventByName(EN eventName);
public:
	EVENTOBJECT();
	~EVENTOBJECT();
	bool addEventListener(EN eventName, EL callback);  // bool addEventListener(Econst char * eventName, bool (*callback)(const EDATA &));
	bool removeEventListener(EN eventName, EL callback);
	bool addEvent(EN eventName);
	bool removeEvent(EN eventName);
	void emit(EN eventName);
};

EVENTOBJECT::~EVENTOBJECT()
{
	evs* p = head;
	evs* q;
	while(NULL != p){
		q = p->Next();
		delete p;
		p = q;
	}
}

EVENTOBJECT::EVENTOBJECT()
{
	head = NULL;
}

EVENT* EVENTOBJECT::getEventByName(EN eventName)
{
	evs* p = head;
	while(NULL != p)
	{
		if(p->event()->eventName == eventName)
		{
			return p->event();
		}
		p = p->Next();
	}
	return NULL;
}

bool EVENTOBJECT::addEvent(EN eventName)
{
	evs* p = head;
	if(NULL == head){
		head = new evs(eventName);
		return true;
	}
	while (NULL != p->Next())
	{
		if(p->event()->eventName == eventName) return false;
		p = p->Next();
	}
	if(p->event()->eventName == eventName) return false;
	p->Next(new evs(eventName));
	return true;
}
	
bool EVENTOBJECT::removeEvent(EN eventName)
{
	if(NULL == head) return false;
	evs* p = head->Next();
	if(head->event()->eventName == eventName) {
		delete head;
		head = p;
		return true;
	}
	evs* q = head;
	while (NULL != p)
	{
		if(p->event()->eventName == eventName){
			q->Next(p->Next());
			delete p;
			return true;
		}
		q = p;
		p = p->Next();
	}
	return false;
}
bool EVENTOBJECT::removeEventListener(EN eventName, EL callback)
{
	EVENT* e = getEventByName(eventName);
	if(NULL != e && e->remove(callback)) return true;
	return false;
}
bool EVENTOBJECT::addEventListener(EN eventName, EL callback)
{
	EVENT* e = getEventByName(eventName);
	if(NULL != e && e->add(callback)) return true;
	return false;
}
void EVENTOBJECT::emit(EN eventName)
{
	EVENT* e = getEventByName(eventName);
	if(NULL!=e){
		e->emit();
	}
}

class TObject: public EVENTOBJECT
{
public:
	TObject();
	~TObject();
};

TObject::TObject()
{
	addEvent("event1");
}
TObject::~TObject()
{
}

bool function_1_1(ED e)
{
	// TODO
	std::cout<< "function_1_1 has been called" << std::endl;
	return true;
}

bool function_1_2(ED e)
{
	// TODO
	std::cout<< "function_1_2 has been called" << std::endl;
	return true;
}

int main()
{
	TObject * t = new TObject();
	TObject * t2 = new TObject();
	bool re;
	t->addEventListener("event1", function_1_1);
	re = t->addEventListener("event1", function_1_1);
	std::cout<< "同一事件添加重复的回调结果: " << (re ? "成功" : "失败") << std::endl;
	t->addEventListener("event1", function_1_2);
	t->emit("event1");
	std::cout<< "\n*********************\n" << std::endl;
	
	t->removeEventListener("event1", function_1_1);
	re = t->addEventListener("event1", [](ED e)->bool{
		std::cout<< "a anonymous function has been called" << std::endl;
		return true;
	});
	std::cout<< "以匿名函数形式添加回调结果: " << (re ? "成功" : "失败") << std::endl;
	re = t->addEventListener("event1", [](ED e)->bool{
		std::cout<< "a anonymous function has been called" << std::endl;
		return true;
	});
	std::cout<< "匿名函数形式重复添加回调结果: " << (re ? "成功" : "失败") << std::endl;
	t->emit("event1");
	std::cout<< "\n*********************\n" << std::endl;
	
	re = t->removeEventListener("event1", [](ED e)->bool{
		std::cout<< "a anonymous function has been called" << std::endl;
		return true;
	});
	std::cout<< "匿名函数形式移除回调结果: " << (re ? "成功" : "失败") << std::endl;
	t->emit("event1");
	
	t2->addEvent("input");
	t2->emit("input");
	t2->addEventListener("input", [](ED e)->bool{
		
	});
	
    return 0;
}
