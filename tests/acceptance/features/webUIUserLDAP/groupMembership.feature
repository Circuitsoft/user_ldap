@webUI @insulated @disablePreviews
Feature: group membership

  As an admin
  I want to the owncloud groups to reflect the LDAP groups
  So that I only need to configure group membership once

  Background:
    Given these users have been created with default attributes and skeleton files:
      | username |
      | user1    |
      | user2    |
      | user3    |
    And user "user1" has logged in using the webUI

  @skipOnOcV10.2
  Scenario: adding a new user to a group after a folder was shared with that group
    When the user shares folder "simple-folder" with group "grp1" using the webUI
    #ToDo use API calls
    And the administrator adds user "user3" to ldap group "grp1"
    When the user re-logs in as "user3" using the webUI
    Then folder "simple-folder (2)" should be listed on the webUI
    And folder "simple-folder (2)" should be marked as shared with "grp1" by "User One" on the webUI

  @skipOnOcV10.2
  Scenario: deleting a user from a group after a folder was shared with that group
    When the user shares folder "simple-folder" with group "grp1" using the webUI
    #ToDo use API calls
    And the administrator removes user "user2" from ldap group "grp1"
    When the user re-logs in as "user2" using the webUI
    Then folder "simple-folder (2)" should not be listed on the webUI

  @skipOnOcV10.2
  Scenario: simple sharing with a group
    When the user shares folder "simple-folder" with group "grp1" using the webUI
    #ToDo use API calls
    When the user re-logs in as "user2" using the webUI
    Then folder "simple-folder (2)" should be listed on the webUI

  @skipOnOcV10.2
  Scenario: simple sharing with a group but user no in it
    When the user shares folder "simple-folder" with group "grp1" using the webUI
    #ToDo use API calls
    When the user re-logs in as "user3" using the webUI
    Then folder "simple-folder (2)" should not be listed on the webUI

  @skipOnOcV10.2
  Scenario: deleting a group after a folder was shared with that group
    When the user shares folder "simple-folder" with group "grp1" using the webUI
    #ToDo use API calls
    And the administrator deletes ldap group "grp1"
    When the user re-logs in as "user2" using the webUI
    Then folder "simple-folder (2)" should not be listed on the webUI

  @skipOnOcV10.2
  Scenario: sharing with non unique group name (using non-unique group name)
    Given the administrator creates group "grp1" in ldap OU "TestUsers"
    And the administrator adds user "user3" to group "grp1" in ldap OU "TestUsers"
    When the user shares folder "simple-folder" with group "grp1" using the webUI
    #ToDo use API calls
    When the user re-logs in as "user3" using the webUI
    Then folder "simple-folder (2)" should not be listed on the webUI

  @skipOnOcV10.2
  Scenario: sharing with a group that is filtered out
    #ToDo use API calls
    When the user shares folder "simple-folder" with group "grp1" using the webUI
    And LDAP config "LDAPTestId" has these settings:
      | key                   | value                                        |
      | ldapGroupFilter       | (&(\|(objectclass=posixGroup))(\|(cn=grp2))) |
      | ldapGroupFilterGroups | grp2                                         |
    When the user re-logs in as "user2" using the webUI
    Then folder "simple-folder (2)" should not be listed on the webUI

  @skipOnOcV10.2
  Scenario: search for groups by alternative attribute
    #ToDo use API calls
    Given LDAP config "LDAPTestId" has these settings:
      | key                          | value       |
      | ldapAttributesForGroupSearch | description |
    # Ensure that the test code is aware of the users and groups that exist
    Given these users have been created with default attributes and skeleton files but not initialized:
      | username |
      | user1    |
      | user2    |
      | user3    |
      | user4    |
      | usergrp  |
    And these groups have been created:
      | groupname |
      | group1    |
      | group2    |
      | group3    |
      | groupuser |
      | grp1      |
      | grp2      |
      | grp3      |
      | grpuser   |
    And the administrator sets the ldap attribute "description" of the entry "cn=grp1,ou=TestGroups" to "my first group"
    And the user has opened the share dialog for folder "simple-folder"
    When the user types "my first" in the share-with-field
    Then all users and groups that contain the string "grp1" in their name should be listed in the autocomplete list on the webUI
