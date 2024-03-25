import java.util.*;
public class CollectionsTest
{
	public static void main(String[] args)
{
		List 1 = new ArrayList();
		List 11 = new LinkedList();
		Map m = new TreeMap();
		Set s = new TreeSet();

		1.add(new Integer(1));
		1.add(new Integer(4));
		1.add(new Integer(3));
		1.add(new Integer(2));
		1.add(new Integer(3));

		11.add("F");
		11.add("B");
		11.add("D");
		11.add("E");
		11.add("C");

		m.put(new Integer(1),"A");
		m.put(new Integer(2),"B");
		m.put(new Integer(3),"C");
		m.put(new Integer(4),"D");
		m.put(new Integer(5),"E");

		hm.put("John",3251.21);
		hm.put("Tom",123.41);
		hm.put("Jane",1442.23);
		hm.put("Halk",66.23);
		hm.put("Smith",-45.21);

		s.add(new Integer (1));
		s.add(new Integer(4));
		s.add(new Integer(3));
		s.add(new Integer(2));
		s.add(new Integer(3));

		System.out.println("List");
		Iterator i =	 1.iterator();
		while (i.hasNext())
			System.out.println(m.get(i.next());
		System.out.println("LinkedList" +11);
		System.out.println("Map using keys");

		{
		}
};