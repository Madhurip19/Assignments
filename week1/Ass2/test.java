import java.util.*;

public class test {

    app demo = new app();

    public static void main(String[] args) {
        test tester = new test();
        tester.testDemoList();
        tester.testDemoSet();
        tester.testDemoMap();
    }

    public void testDemoList() {
        List<String> crew = demo.demoList();
        if (crew.size() != 2) {
            System.out.println("testDemoList failed: Expected size 2 but got " + crew.size());
        } else if (!crew.contains("Luffy")) {
            System.out.println("testDemoList failed: List does not contain 'Luffy'");
        } else if (crew.contains("Nami")) {
            System.out.println("testDemoList failed: List contains 'Nami', but it should not");
        } else {
            System.out.println("testDemoList passed");
        }
    }

    public void testDemoSet() {
        Set<String> fruits = demo.demoSet();
        if (fruits.size() != 1) {
            System.out.println("testDemoSet failed: Expected size 1 but got " + fruits.size());
        } else if (!fruits.contains("Gomu Gomu no Mi")) {
            System.out.println("testDemoSet failed: Set does not contain 'Gomu Gomu no Mi'");
        } else if (fruits.contains("Hana Hana no Mi")) {
            System.out.println("testDemoSet failed: Set contains 'Hana Hana no Mi', but it should not");
        } else {
            System.out.println("testDemoSet passed");
        }
    }

    public void testDemoMap() {
        Map<Integer, String> roles = demo.demoMap();
        if (roles.size() != 2) {
            System.out.println("testDemoMap failed: Expected size 2 but got " + roles.size());
        } else if (!"Captain".equals(roles.get(1))) {
            System.out.println("testDemoMap failed: Role for key 1 is not 'Captain'");
        } else if (roles.containsKey(3)) {
            System.out.println("testDemoMap failed: Map contains key 3, but it should not");
        } else {
            System.out.println("testDemoMap passed");
        }
    }
}
